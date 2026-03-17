# Lia — AI 에이전트 기반 애자일 팀

Claude Code 플러그인. Orchestrator-Worker 패턴으로 Lia가 사용자 요청을 분석하고 전문 에이전트 팀에게 위임합니다.

## 설치

```bash
# 로컬 개발/테스트
claude --plugin-dir /path/to/lia

# 또는 프로젝트 설정에 추가
# .claude/settings.json → plugins 배열에 경로 추가
```

## 사용법

### 자연어 호출 (auto-trigger)

```
리아야, 프로젝트 초기화해줘
리아야, 프로젝트 발견 시작해줘
리아야, 로그인 기능 유저 스토리 작성해줘
리아야, US-0001 사양서 만들어줘
리아야, 현재 프로젝트 상태 알려줘
```

### /lia 커맨드

```
/lia 프로젝트 초기화
/lia 회원가입 스토리 작성
/lia US-0001 사양서 작성
/lia 백로그 보여줘
```

## 팀 구성

| 에이전트 | 역할 | 모델 |
|----------|------|------|
| **Lia** | 오케스트레이터 — 요청 분석, 위임, 상태 관리 | opus |
| **Discovery Facilitator** | Inception Deck, 페르소나 정의, Story Mapping | sonnet |
| **Story Writer** | 유저 스토리 작성/수정/분할/검증, INVEST + DoR 검증, SPIDR 분할 | sonnet |
| **Spec Writer** | 유저 스토리 → 기술 사양서 변환 | sonnet |
| Developer | TDD 기반 구현 (Phase 2) | sonnet |
| QA | 수용 기준 검증 (Phase 2) | sonnet |
| DevOps | 빌드/배포/인프라 (Phase 2) | sonnet |

## 워크플로우

```
Init → Discover → Stories → Specs → Implement (TDD) → QA → Deploy
```

가이드라인 기반 — Lia가 다음 단계를 추천하지만 강제하지 않습니다.

## 프로젝트 구조

Lia가 관리하는 `.lia/` 디렉토리:

```
.lia/
├── config.json    # 프로젝트 설정 (팀, 언어, 상태)
├── context.md     # 프로젝트 메모리 (아키텍처, 결정사항)
├── backlog.md     # 우선순위별 백로그
├── project/       # Discovery 산출물 (inception-deck, personas, story-map)
├── stories/       # 유저 스토리 (US-NNNN-slug.md)
├── specs/         # 기술 사양서 (SPEC-NNNN-slug.md)
└── sprints/       # 스프린트 계획
```

## 커스텀 에이전트

프로젝트별로 팀원을 추가할 수 있습니다:

```
리아야, 팀에 SEO 전문가 추가해줘
```

커스텀 에이전트는 `.claude/agents/`에 생성되어 Claude Code가 네이티브로 인식합니다.

## 요구사항

- Claude Code
- Node.js (init.js 실행용)
- Python 3 (SessionStart 훅용)
