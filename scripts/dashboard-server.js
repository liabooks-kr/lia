#!/usr/bin/env node

/**
 * Lia Dashboard Server
 * .lia/ 디렉토리를 읽어 브라우저에서 프로젝트 상태를 표시하는 로컬 서버.
 * SSE로 파일 변경을 실시간 감지.
 *
 * Usage: node dashboard-server.js --dir /path/to/project
 * Output: JSON { "url": "http://localhost:PORT" }
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// CLI 인자 파싱
function parseArgs(args) {
  const result = { dir: process.cwd() };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--dir') result.dir = args[++i] || process.cwd();
  }
  return result;
}

const args = parseArgs(process.argv.slice(2));
const LIA_DIR = path.join(args.dir, '.lia');
const DASHBOARD_HTML = path.join(__dirname, 'dashboard.html');

if (!fs.existsSync(LIA_DIR)) {
  console.error(JSON.stringify({ error: '.lia/ directory not found', dir: args.dir }));
  process.exit(1);
}

// SSE 클라이언트 관리
const sseClients = new Set();
let idleTimer = null;
const IDLE_TIMEOUT = 30 * 60 * 1000; // 30분

function resetIdleTimer() {
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    console.error('Idle timeout reached. Shutting down.');
    process.exit(0);
  }, IDLE_TIMEOUT);
}

// 파일 읽기 유틸리티
function readJSON(filepath) {
  try {
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  } catch { return null; }
}

function readMarkdown(filepath) {
  try {
    return fs.readFileSync(filepath, 'utf-8');
  } catch { return null; }
}

function listMarkdownFiles(dirpath) {
  try {
    return fs.readdirSync(dirpath)
      .filter(f => f.endsWith('.md'))
      .map(f => {
        const content = fs.readFileSync(path.join(dirpath, f), 'utf-8');
        const titleMatch = content.match(/^#\s+(.+)$/m);
        return {
          filename: f,
          title: titleMatch ? titleMatch[1] : f.replace('.md', ''),
          content,
        };
      });
  } catch { return []; }
}

// API 핸들러
const apiHandlers = {
  '/api/config': () => readJSON(path.join(LIA_DIR, 'config.json')),
  '/api/context': () => ({ content: readMarkdown(path.join(LIA_DIR, 'context.md')) }),
  '/api/backlog': () => ({ content: readMarkdown(path.join(LIA_DIR, 'backlog.md')) }),
  '/api/stories': () => listMarkdownFiles(path.join(LIA_DIR, 'stories')),
  '/api/specs': () => listMarkdownFiles(path.join(LIA_DIR, 'specs')),
  '/api/project': () => listMarkdownFiles(path.join(LIA_DIR, 'project')),
};

// HTTP 서버
const server = http.createServer((req, res) => {
  resetIdleTimer();

  // CORS 헤더
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 메인 페이지
  if (req.url === '/' || req.url === '/index.html') {
    try {
      const html = fs.readFileSync(DASHBOARD_HTML, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    } catch {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('dashboard.html not found');
    }
    return;
  }

  // SSE 엔드포인트
  if (req.url === '/api/watch') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
    res.write('data: {"type":"connected"}\n\n');
    sseClients.add(res);
    req.on('close', () => sseClients.delete(res));
    return;
  }

  // 개별 파일 API (story/:id, spec/:id)
  const storyMatch = req.url.match(/^\/api\/story\/(.+)$/);
  if (storyMatch) {
    const id = storyMatch[1];
    const storiesDir = path.join(LIA_DIR, 'stories');
    try {
      const files = fs.readdirSync(storiesDir).filter(f => f.includes(id));
      if (files.length > 0) {
        const content = fs.readFileSync(path.join(storiesDir, files[0]), 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ filename: files[0], content }));
        return;
      }
    } catch {}
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'not found' }));
    return;
  }

  const specMatch = req.url.match(/^\/api\/spec\/(.+)$/);
  if (specMatch) {
    const id = specMatch[1];
    const specsDir = path.join(LIA_DIR, 'specs');
    try {
      const files = fs.readdirSync(specsDir).filter(f => f.includes(id));
      if (files.length > 0) {
        const content = fs.readFileSync(path.join(specsDir, files[0]), 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ filename: files[0], content }));
        return;
      }
    } catch {}
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'not found' }));
    return;
  }

  // JSON API 엔드포인트
  if (apiHandlers[req.url]) {
    const data = apiHandlers[req.url]();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(data));
    return;
  }

  // 404
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

// 파일 감시 (SSE 브로드캐스트)
const debounceTimers = new Map();

function watchDirectory(dir) {
  try {
    fs.watch(dir, { recursive: true }, (eventType, filename) => {
      if (!filename) return;
      const key = filename;
      if (debounceTimers.has(key)) clearTimeout(debounceTimers.get(key));
      debounceTimers.set(key, setTimeout(() => {
        debounceTimers.delete(key);
        const msg = `data: ${JSON.stringify({ type: 'file-changed', file: filename })}\n\n`;
        for (const client of sseClients) {
          try { client.write(msg); } catch { sseClients.delete(client); }
        }
      }, 300));
    });
  } catch {}
}

watchDirectory(LIA_DIR);

// 서버 시작
const PORT = 3000 + Math.floor(Math.random() * 1000);
server.listen(PORT, 'localhost', () => {
  const url = `http://localhost:${PORT}`;
  console.log(JSON.stringify({ url, port: PORT, liaDir: LIA_DIR }));
  resetIdleTimer();
});
