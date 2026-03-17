#!/usr/bin/env node

/**
 * Lia 프로젝트 초기화 스크립트
 * .lia/ 디렉토리 구조와 초기 파일을 생성합니다.
 *
 * Usage: node init.js --name "project-name" --lang ko --root "/path/to/project"
 */

const fs = require('fs');
const path = require('path');

// 인자 파싱
function parseArgs(args) {
  const result = { name: '', lang: 'ko', root: process.cwd() };
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--name': result.name = args[++i] || ''; break;
      case '--lang': result.lang = args[++i] || 'ko'; break;
      case '--root': result.root = args[++i] || process.cwd(); break;
    }
  }
  if (!result.name) {
    result.name = path.basename(result.root);
  }
  return result;
}

// config.json 생성
function createConfig(name, lang) {
  return {
    version: '1.0.0',
    project: {
      name,
      description: '',
      created: new Date().toISOString().split('T')[0],
      language: lang,
    },
    team: {
      core: ['ideator', 'discovery-facilitator', 'architect', 'recruiter', 'story-writer', 'spec-writer'],
      custom: [],
    },
    workflow: {
      activeStory: null,
      activeSpec: null,
      activeSprint: null,
    },
    counters: {
      story: 0,
      spec: 0,
      sprint: 0,
    },
  };
}

// context.md 템플릿
function createContext(name, date) {
  return `# Project Context

> Lia의 프로젝트 메모리. 중요 이벤트 후 자동 업데이트.
> Last updated: ${date}

## Project Overview

${name} 프로젝트.

## Tech Stack

(프로젝트 분석 후 자동 채워짐)

## Architecture Decisions

(아직 기록된 결정 없음)

## Team

- discovery-facilitator: Inception Deck, 페르소나, Story Mapping
- story-writer: 유저 스토리 작성/수정/분할/검증
- spec-writer: 기술 사양서 작성
- developer: TDD 기반 구현
- qa: 수용 기준 검증
- devops: 빌드/배포/인프라

## Current State

프로젝트 초기화 완료. 아이디어 구체화(Ideate) 대기 중.

## Key Conventions

(프로젝트별 규칙이 정해지면 여기에 기록)
`;
}

// backlog.md 템플릿
function createBacklog() {
  return `# Backlog

## P0 - Must Have

(아직 스토리 없음)

## P1 - Should Have

## P2 - Nice to Have

## Done
`;
}

// 메인 실행
function main() {
  const args = parseArgs(process.argv.slice(2));
  const liaDir = path.join(args.root, '.lia');

  // 이미 초기화되었는지 확인
  if (fs.existsSync(path.join(liaDir, 'config.json'))) {
    console.error(JSON.stringify({
      success: false,
      error: 'already_initialized',
      message: '이미 초기화된 프로젝트입니다.',
    }));
    process.exit(1);
  }

  // 디렉토리 생성
  const dirs = ['project', 'stories', 'specs', 'sprints'];
  fs.mkdirSync(liaDir, { recursive: true });
  dirs.forEach((d) => {
    fs.mkdirSync(path.join(liaDir, d), { recursive: true });
  });

  const today = new Date().toISOString().split('T')[0];

  // 파일 생성
  fs.writeFileSync(
    path.join(liaDir, 'config.json'),
    JSON.stringify(createConfig(args.name, args.lang), null, 2) + '\n',
  );

  fs.writeFileSync(
    path.join(liaDir, 'context.md'),
    createContext(args.name, today),
  );

  fs.writeFileSync(
    path.join(liaDir, 'backlog.md'),
    createBacklog(),
  );

  // 성공 출력
  console.log(JSON.stringify({
    success: true,
    path: liaDir,
    name: args.name,
    language: args.lang,
  }));
}

main();
