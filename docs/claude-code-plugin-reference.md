# Claude Code 플러그인 개발 레퍼런스

> Anthropic 공식 문서 기반 정리. Lia 플러그인 설계 검증 및 개발 시 참조용.

---

## 1. 플러그인 구조

### 1.1 디렉토리 레이아웃

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json          # 매니페스트 (이 디렉토리에는 이 파일만!)
├── commands/                # 슬래시 커맨드 (자동 탐색)
│   └── status.md
├── agents/                  # 서브에이전트 (자동 탐색)
│   └── reviewer.md
├── skills/                  # 스킬 (자동 탐색)
│   └── my-skill/
│       ├── SKILL.md
│       └── references/
├── hooks/                   # 훅 설정
│   └── hooks.json
├── scripts/                 # 훅/유틸리티 스크립트
├── .mcp.json               # MCP 서버 정의
├── .lsp.json               # LSP 서버 설정
├── settings.json           # 기본 플러그인 설정
└── README.md
```

**주의**: `commands/`, `agents/`, `skills/`, `hooks/`를 `.claude-plugin/` 안에 넣지 말 것. `.claude-plugin/`에는 오직 `plugin.json`만 들어간다.

### 1.2 plugin.json 전체 스키마

```json
{
  "name": "plugin-name",           // 필수. kebab-case, 공백 불가
  "version": "1.0.0",             // 시맨틱 버저닝 (MAJOR.MINOR.PATCH)
  "description": "설명",           // 플러그인 목적
  "author": {                      // 작성자 정보
    "name": "이름",                // 필수 (author 사용 시)
    "email": "email@example.com", // 선택
    "url": "https://..."          // 선택
  },
  "homepage": "https://...",       // 문서 URL
  "repository": "https://...",     // 소스코드 URL
  "license": "MIT",               // SPDX 라이선스
  "keywords": ["tag1", "tag2"],   // 검색 태그

  // 컴포넌트 경로 (기본 디렉토리에 추가됨, 대체 아님)
  "commands": "./custom/commands/",        // string | array
  "agents": "./custom/agents/",            // string | array
  "skills": "./custom/skills/",            // string | array
  "hooks": "./config/hooks.json",          // string | array | object
  "mcpServers": "./mcp-config.json",       // string | array | object
  "outputStyles": "./styles/",             // string | array
  "lspServers": "./.lsp.json"             // string | array | object
}
```

**필수 필드**: `name`만 필수. 나머지는 모두 선택.

**경로 규칙**:
- 모든 경로는 플러그인 루트 기준 상대 경로, `./`로 시작
- 커스텀 경로는 기본 디렉토리를 **대체하지 않고 보충**함
- 배열로 여러 경로 지정 가능

### 1.3 환경변수

| 변수 | 설명 |
|------|------|
| `${CLAUDE_PLUGIN_ROOT}` | 플러그인 디렉토리의 절대 경로. 훅, MCP 서버, 스크립트에서 사용 |
| `${CLAUDE_PROJECT_DIR}` | 현재 프로젝트 디렉토리 |

### 1.4 자동 탐색 메커니즘

매니페스트가 없어도 기본 디렉토리에서 자동 탐색:

| 컴포넌트 | 기본 위치 | 탐색 대상 |
|----------|----------|----------|
| 매니페스트 | `.claude-plugin/plugin.json` | 메타데이터 (선택) |
| 커맨드 | `commands/` | `.md` 파일 |
| 에이전트 | `agents/` | `.md` 파일 |
| 스킬 | `skills/` | `<name>/SKILL.md` 구조 |
| 훅 | `hooks/hooks.json` | JSON 설정 |
| MCP | `.mcp.json` | 서버 정의 |
| LSP | `.lsp.json` | 서버 설정 |
| 설정 | `settings.json` | 기본 설정 |

### 1.5 플러그인 설치 스코프

| 스코프 | 설정 파일 | 용도 |
|--------|----------|------|
| `user` | `~/.claude/settings.json` | 개인용 (모든 프로젝트) |
| `project` | `.claude/settings.json` | 팀 공유 (버전 관리) |
| `local` | `.claude/settings.local.json` | 프로젝트 한정 (gitignore) |
| `managed` | 관리자 설정 | 조직 전체 (읽기 전용) |

### 1.6 개발 & 디버깅

```bash
claude --plugin-dir ./my-plugin   # 로컬 개발 시 플러그인 로드
claude --debug                    # 플러그인 로딩 디버그
claude plugin validate .          # 매니페스트 검증
/reload-plugins                   # 세션 중 플러그인 리로드
```

---

## 2. 에이전트 (서브에이전트)

### 2.1 YAML 프론트매터 전체 필드

```yaml
---
name: agent-name                    # 필수. lowercase + hyphens
description: >                      # 필수. 자동 트리거의 핵심
  설명. "use proactively when..." 포함 권장.
tools: Read, Grep, Glob, Bash      # 선택. 생략 시 모든 도구 상속
disallowedTools: Write, Edit        # 선택. 상속된 도구에서 제거
model: sonnet                       # 선택. sonnet|opus|haiku|inherit (기본: inherit)
permissionMode: default             # 선택. default|acceptEdits|dontAsk|bypassPermissions|plan
maxTurns: 10                        # 선택. 최대 에이전트 턴 수
skills: kent-beck-test              # 선택. 시작 시 주입할 스킬
mcpServers: slack, github           # 선택. 사용할 MCP 서버
hooks:                              # 선택. 에이전트 스코프 훅
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./validate.sh"
memory: user                        # 선택. user|project|local (크로스세션 학습)
background: false                   # 선택. true면 백그라운드 실행
isolation: worktree                 # 선택. 격리된 git worktree에서 실행
color: blue                         # 선택. UI 배경색
---

시스템 프롬프트 내용 (마크다운)
```

### 2.2 자동 트리거

`description` 필드가 자동 위임의 핵심. Claude가 사용자 요청과 description을 매칭하여 자동으로 에이전트에 위임한다.

**효과적인 description 작성법**:
```yaml
# 좋음 - 구체적이고 트리거 키워드 포함
description: >
  유저 스토리를 작성하거나 백로그를 정리할 때 사용.
  "스토리", "백로그", "요구사항" 키워드에 반응.
  Use proactively when user mentions stories or backlog.

# 나쁨 - 너무 일반적
description: 코드 분석 도구
```

**트리거 강화 문구**:
- "Use proactively when..."
- "Use immediately after..."
- "Use when you encounter..."

### 2.3 도구 제한

```yaml
# 허용 목록 (지정된 도구만)
tools: Read, Grep, Glob, Bash

# 거부 목록 (상속에서 제거)
disallowedTools: Write, Edit

# 서브에이전트 스폰 제한
tools: Agent(worker, researcher), Read, Bash  # 특정 에이전트만 스폰 가능
tools: Agent, Read, Bash                       # 모든 에이전트 스폰 가능
tools: Read, Bash                              # Agent 생략 = 스폰 불가
```

**사용 가능한 도구 목록**:

| 도구 | 용도 | 읽기 전용 |
|------|------|----------|
| `Read` | 파일 읽기 | Yes |
| `Write` | 파일 생성 | No |
| `Edit` | 파일 수정 | No |
| `Glob` | 패턴으로 파일 찾기 | Yes |
| `Grep` | 파일 내용 검색 | Yes |
| `Bash` | 터미널 명령 실행 | No |
| `WebFetch` | 웹 콘텐츠 가져오기 | Yes |
| `WebSearch` | 웹 검색 | Yes |
| `Agent` | 서브에이전트 스폰 | - |
| `Task` | 태스크 위임 | - |

### 2.4 모델 선택 전략

```yaml
model: haiku    # 빠름, 비용 절약. 읽기 전용 탐색, 대량 처리
model: sonnet   # 균형. 코드 분석, 리뷰, 범용
model: opus     # 최고 성능. 복잡한 추론, 오케스트레이터, 핵심 의사결정
model: inherit  # 부모 세션 모델 상속 (기본값)
```

### 2.5 시스템 프롬프트 작성법

프론트매터 아래 마크다운 본문이 시스템 프롬프트가 된다.

**구조 권장**:
```markdown
---
name: my-agent
description: ...
---

당신은 [역할]입니다. [핵심 임무].

## 워크플로우
1. 첫 번째 단계
2. 두 번째 단계
3. 세 번째 단계

## 제약 사항
- 집중해야 할 것
- 피해야 할 것
- 출력 형식

## 출력 형식
[구체적인 출력 형식 명시]
```

**팁**:
- 역할을 구체적으로: "코드를 리뷰합니다" → "시니어 보안 전문가로서 인증/암호화 코드를 리뷰합니다"
- 워크플로우를 단계별로 명시
- 제약 사항 명확히: "SELECT 쿼리만 허용", "코드 수정 불가"
- 출력 형식 지정: "우선순위별로 정리"

### 2.6 에이전트 저장 위치와 우선순위

| 위치 | 스코프 | 우선순위 | 적용 범위 |
|------|--------|---------|----------|
| `--agents` CLI 플래그 | 세션 | 1 (최고) | 현재 세션만 |
| `.claude/agents/` | 프로젝트 | 2 | 현재 프로젝트 |
| `~/.claude/agents/` | 사용자 | 3 | 모든 프로젝트 |
| 플러그인 `agents/` | 플러그인 | 4 (최저) | 플러그인 활성화 시 |

### 2.7 오케스트레이터 패턴

**순차 체인**: 에이전트 A 완료 → 결과를 에이전트 B에 전달
**병렬 리서치**: 여러 에이전트를 동시에 스폰하여 독립적 탐색
**조건부 위임**: 훅으로 동적 제어

오케스트레이터 에이전트가 `Task` 도구로 하위 에이전트를 스폰하고, 결과를 종합하여 보고하는 패턴.

### 2.8 플러그인 에이전트 제한사항

> **중요**: 플러그인의 `agents/` 디렉토리에 있는 에이전트는 다음 필드를 지원하지 않는다:
> - `hooks` — 에이전트 스코프 훅 사용 불가
> - `mcpServers` — MCP 서버 지정 불가
> - `permissionMode` — 부모 권한 모드 상속
>
> 이 기능이 필요하면 `.claude/agents/`로 복사하여 사용해야 한다.

### 2.9 에이전트 통신

- **포그라운드 에이전트**: 메인 대화를 차단하고 실행. 결과가 메인 컨텍스트로 반환.
- **백그라운드 에이전트**: 병렬 실행. 권한 요청은 사전 승인된 것만 가능.
- **에이전트 팀** (실험적): `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 환경변수로 활성화. 에이전트 간 직접 메시징, 공유 태스크 리스트.

---

## 3. 스킬

### 3.1 SKILL.md 프론트매터 전체 필드

```yaml
---
name: skill-name                      # 선택. 생략 시 디렉토리 이름 사용
description: >                        # 권장. 자동 트리거의 핵심
  스킬 설명. 트리거 키워드 포함.
argument-hint: "[issue-number]"       # 선택. 자동완성 시 힌트
disable-model-invocation: true        # 선택. true면 사용자만 호출 가능 (기본: false)
user-invocable: true                  # 선택. false면 /메뉴에 안 보임 (기본: true)
allowed-tools: Read, Grep, Glob      # 선택. 스킬 활성 시 사용 가능 도구
model: sonnet                         # 선택. 사용할 모델
context: fork                         # 선택. "fork"면 격리된 서브에이전트에서 실행
agent: Explore                        # 선택. context: fork일 때 에이전트 타입
hooks:                                # 선택. 스킬 스코프 훅
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./validate.sh"
---

스킬 지시 내용 (마크다운)
```

### 3.2 디렉토리 구조

```
skills/
└── my-skill/
    ├── SKILL.md           # 필수 - 메인 지시 + 네비게이션
    ├── reference.md       # 선택 - 상세 참조 문서
    ├── examples.md        # 선택 - 사용 예시
    ├── template.md        # 선택 - 템플릿
    └── scripts/
        └── helper.sh      # 선택 - 유틸리티 스크립트
```

**저장 위치와 우선순위**:

| 위치 | 스코프 | 적용 범위 |
|------|--------|----------|
| Enterprise 관리 | 조직 | 모든 사용자 (최고 우선순위) |
| `~/.claude/skills/<name>/SKILL.md` | 사용자 | 모든 프로젝트 |
| `.claude/skills/<name>/SKILL.md` | 프로젝트 | 현재 프로젝트 |
| 플러그인 `skills/<name>/SKILL.md` | 플러그인 | 플러그인 활성화 시 |

플러그인 스킬은 `/plugin-name:skill-name`으로 네임스페이스 구분.

### 3.3 트리거 제어 매트릭스

| 설정 | 사용자 호출 | Claude 자동 호출 | 로딩 시점 |
|------|-----------|----------------|----------|
| (기본값) | O | O | description이 컨텍스트에 있고, 호출 시 전체 로드 |
| `disable-model-invocation: true` | O | X | 컨텍스트에 없음. 사용자 호출 시 로드 |
| `user-invocable: false` | X | O | description이 컨텍스트에 있고, 호출 시 로드 |
| 둘 다 설정 | X | X | 사실상 비활성화 |

### 3.4 Progressive Disclosure

SKILL.md는 **500줄 이하**로 유지하고, 상세 내용은 별도 파일로 분리:

```markdown
---
name: my-skill
---

## 빠른 시작
[핵심 지시 - 50~100줄]

## 고급 기능
상세 API 문서는 [reference.md](reference.md) 참조
사용 예시는 [examples.md](examples.md) 참조
```

Claude는 참조를 인식하고 필요할 때만 해당 파일을 로드한다.

### 3.5 문자열 치환 변수

| 변수 | 설명 |
|------|------|
| `$ARGUMENTS` | 호출 시 전달된 모든 인자 |
| `$ARGUMENTS[N]` 또는 `$N` | N번째 인자 (0부터 시작) |
| `${CLAUDE_SESSION_ID}` | 현재 세션 ID |
| `${CLAUDE_SKILL_DIR}` | SKILL.md가 있는 디렉토리 경로 |

**예시**:
```yaml
---
name: migrate
---
$0 컴포넌트를 $1에서 $2로 마이그레이션.
```
```
/migrate SearchBar React Vue
→ "SearchBar 컴포넌트를 React에서 Vue로 마이그레이션."
```

### 3.6 전처리 실행 (`!`backtick``)

SKILL.md 안에서 쉘 명령을 전처리로 실행하여 결과를 삽입:

```markdown
---
name: pr-summary
context: fork
agent: Explore
---

## PR 컨텍스트
- PR diff: !`gh pr diff`
- 변경 파일: !`gh pr diff --name-only`
- 최근 커밋: !`git log --oneline -10`

이 PR을 요약...
```

Claude가 프롬프트를 보기 전에 명령이 실행되어 결과로 대체된다.

### 3.7 스킬 vs 에이전트 vs 커맨드 비교

| 기준 | 스킬 | 에이전트 |
|------|------|---------|
| **컨텍스트** | 메인 대화 (인라인) | 별도 컨텍스트 윈도우 |
| **호출 방식** | `/skill-name` 또는 자동 | 자동 위임 또는 명시적 요청 |
| **적합한 용도** | 도메인 지식, 워크플로우 템플릿, 참조 | 대량 작업, 도구 격리, 태스크 분리 |
| **도구 제한** | `allowed-tools`로 제한 | `tools`/`disallowedTools`로 제한 |
| **결과** | 메인 대화에 직접 반영 | 결과만 메인으로 반환 |

**판단 기준**:
- 참조 지식/템플릿 → **스킬**
- 독립적이고 대량의 작업 → **에이전트**
- 부수 효과가 있는 워크플로우 (배포 등) → **스킬** (`disable-model-invocation: true`)

---

## 4. 훅

### 4.1 전체 이벤트 목록

**세션 이벤트**:
| 이벤트 | 시점 | 차단 가능 |
|--------|------|----------|
| `SessionStart` | 세션 시작/재개 | No |
| `InstructionsLoaded` | CLAUDE.md 등 로드 시 | No |
| `SessionEnd` | 세션 종료 | No |

**사용자 입력**:
| 이벤트 | 시점 | 차단 가능 |
|--------|------|----------|
| `UserPromptSubmit` | 사용자 프롬프트 제출 시 | No |

**도구 실행**:
| 이벤트 | 시점 | 차단 가능 |
|--------|------|----------|
| `PreToolUse` | 도구 실행 전 | Yes (exit 2) |
| `PermissionRequest` | 권한 대화상자 표시 시 | Yes |
| `PostToolUse` | 도구 성공 후 | No |
| `PostToolUseFailure` | 도구 실패 후 | No |

**에이전트 이벤트**:
| 이벤트 | 시점 | 차단 가능 |
|--------|------|----------|
| `SubagentStart` | 서브에이전트 스폰 | No |
| `SubagentStop` | 서브에이전트 종료 | Yes |
| `Stop` | Claude 종료 시도 | Yes |

**팀/태스크**:
| 이벤트 | 시점 | 차단 가능 |
|--------|------|----------|
| `TeammateIdle` | 팀원 유휴 상태 전환 | Yes |
| `TaskCompleted` | 태스크 완료 | Yes |

**유지보수**:
| 이벤트 | 시점 | 차단 가능 |
|--------|------|----------|
| `PreCompact` | 컨텍스트 압축 전 | No |
| `PostCompact` | 컨텍스트 압축 후 | No |
| `ConfigChange` | 설정/스킬 변경 | Yes |

### 4.2 훅 타입 4가지

#### (1) Command 훅

쉘 스크립트 실행. stdin으로 JSON 수신, stdout/stderr로 출력.

```json
{
  "type": "command",
  "command": "${CLAUDE_PLUGIN_ROOT}/scripts/validate.sh",
  "timeout": 30,
  "async": false
}
```

#### (2) HTTP 훅

원격 엔드포인트에 POST 요청.

```json
{
  "type": "http",
  "url": "http://localhost:8080/hooks/validate",
  "timeout": 30,
  "headers": {
    "Authorization": "Bearer $MY_TOKEN"
  },
  "allowedEnvVars": ["MY_TOKEN"]
}
```

#### (3) Prompt 훅

단일 턴 LLM 평가. 간단한 판단에 적합.

```json
{
  "type": "prompt",
  "prompt": "이 작업이 완료되었는지 평가: $ARGUMENTS",
  "model": "claude-haiku",
  "timeout": 30
}
```

응답 스키마: `{ "ok": true, "reason": "이유" }`

#### (4) Agent 훅

도구 접근 가능한 서브에이전트 스폰. 복잡한 검증에 적합.

```json
{
  "type": "agent",
  "prompt": "모든 유닛 테스트가 통과하는지 검증. $ARGUMENTS",
  "timeout": 60
}
```

최대 50턴, 기본 타임아웃 60초.

### 4.3 매처 문법

이벤트별로 매칭 대상이 다르다:

| 이벤트 | 매칭 대상 | 예시 |
|--------|----------|------|
| `PreToolUse`, `PostToolUse` | 도구 이름 (regex) | `"Bash"`, `"Edit\|Write"`, `"mcp__github__.*"` |
| `SessionStart` | 세션 소스 | `"startup"`, `"resume"` |
| `SessionEnd` | 종료 이유 | `"clear"`, `"logout"` |
| `SubagentStart/Stop` | 에이전트 타입 | `"Explore"`, 커스텀 이름 |
| `Notification` | 알림 타입 | `"permission_prompt"` |
| `PreCompact/PostCompact` | 트리거 소스 | `"manual"`, `"auto"` |
| `ConfigChange` | 설정 소스 | `"user_settings"`, `"skills"` |

매처 생략, `""`, `"*"` → 모든 발생에 매칭. 매처는 **대소문자 구분**.

### 4.4 입출력 JSON 스키마

**입력 (stdin)**:
```json
{
  "session_id": "abc123",
  "cwd": "/path/to/project",
  "hook_event_name": "PreToolUse",
  "tool_name": "Bash",
  "tool_input": { "command": "npm test" }
}
```

**출력 (stdout)** — 구조화된 제어:
```json
{
  "decision": "block",
  "reason": "차단 이유",
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "allow|deny|ask",
    "updatedInput": { "command": "수정된 명령" },
    "additionalContext": "Claude 컨텍스트에 추가할 텍스트"
  }
}
```

### 4.5 종료 코드

| 코드 | 의미 | 동작 |
|------|------|------|
| `0` | 성공 | stdout을 JSON으로 파싱. 일부 이벤트에서 stdout이 컨텍스트에 추가 |
| `2` | 차단 | 해당 작업을 차단. stderr이 Claude/사용자에게 표시 |
| 기타 | 오류 | 비차단 오류. stderr 로깅, 실행 계속 |

### 4.6 훅 설정 위치

```json
// .claude/settings.json 또는 hooks/hooks.json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "./.claude/hooks/validate-bash.sh"
          }
        ]
      }
    ]
  }
}
```

---

## 5. MCP 서버 통합

### 5.1 .mcp.json 형식

```json
{
  "mcpServers": {
    "server-name": {
      "type": "stdio",
      "command": "/path/to/server",
      "args": ["--config", "file.json"],
      "cwd": "/working/dir",
      "env": {
        "API_KEY": "${API_KEY}"
      }
    }
  }
}
```

### 5.2 서버 타입

| 타입 | 전송 방식 | 용도 |
|------|----------|------|
| `stdio` | 로컬 프로세스 | 커스텀 도구, 로컬 스크립트 |
| `http` | HTTP POST | 원격 API, 클라우드 서비스 |
| `sse` | Server-Sent Events | (deprecated, http 사용 권장) |

### 5.3 플러그인 내 MCP 설정

`plugin.json`에서 인라인 또는 `.mcp.json` 참조:

```json
{
  "name": "my-plugin",
  "mcpServers": {
    "plugin-db": {
      "command": "${CLAUDE_PLUGIN_ROOT}/servers/db-server",
      "args": ["--config", "${CLAUDE_PLUGIN_ROOT}/config.json"],
      "env": {
        "DB_PATH": "${CLAUDE_PLUGIN_ROOT}/data"
      }
    }
  }
}
```

플러그인 MCP 서버는 플러그인 활성화 시 자동 시작.

### 5.4 환경변수 확장

```json
{
  "url": "${API_BASE_URL:-https://api.example.com}/mcp",
  "headers": {
    "Authorization": "Bearer ${API_KEY}"
  }
}
```

`${VAR:-default}` 문법으로 기본값 설정 가능.

---

## 6. Lia 플러그인 설계 검증 노트

기존 `lia-plugin-plan.md`와 이 레퍼런스를 대조한 결과:

### 수정이 필요한 부분

1. **플러그인 에이전트 제한사항**: 플러그인 `agents/`의 에이전트는 `hooks`, `mcpServers`, `permissionMode` 필드를 지원하지 않음. Lia 에이전트들이 이 기능을 사용하려면 `.claude/agents/`에 배치하거나 프론트매터에서 해당 필드를 제거해야 함.

2. **description 강화**: 각 에이전트의 `description`에 트리거 키워드와 "use proactively when..." 문구를 추가하면 자동 위임 정확도가 높아짐.

3. **skills 필드 활용**: developer 에이전트에 `skills: kent-beck-test`가 이미 포함되어 있음 — 좋음. devops에도 `skills: use-railway`를 추가 가능.

4. **model 전략 확인**: Lia(오케스트레이터)에 opus, 팀원에 sonnet — 적절한 설계.

5. **memory 필드 고려**: Lia 에이전트에 `memory: project`를 추가하면 프로젝트별 학습이 가능하지만, 플러그인 에이전트 제한사항에 해당하는지 확인 필요.

### 현재 설계가 올바른 부분

- `.claude-plugin/plugin.json`에 매니페스트만 배치 ✓
- `commands/`, `agents/`, `skills/` 루트 레벨 배치 ✓
- 스킬에 `references/` 디렉토리 사용 ✓
- 에이전트별 도구 최소 권한 원칙 ✓
- QA 에이전트에 Write 도구 제외 ✓
