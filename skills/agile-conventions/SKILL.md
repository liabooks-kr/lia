---
name: agile-conventions
description: >
  애자일 + SDD 워크플로우 규칙, 번호 체계, .lia/ 디렉토리 구조.
  프로젝트 관리, 스프린트, 백로그, 상태 관리 작업 시 자동 활성화.
user-invocable: false
---

# 애자일 + SDD 워크플로우 컨벤션

## 워크플로우 사이클

권장 순서 (강제 아님, 가이드라인):

```
Init → Stories → Specs → Implement (TDD) → QA → Deploy
```

| 단계 | 산출물 | 담당 |
|------|--------|------|
| Init | .lia/ 구조, config.json, context.md | Lia |
| Stories | US-NNNN-slug.md, backlog.md | Story Writer |
| Specs | SPEC-NNNN-slug.md | Spec Writer |
| Implement | 소스 코드 + 테스트 코드 | Developer |
| QA | 검증 보고서 | QA |
| Deploy | 배포 완료 | DevOps |

## 번호 체계

| 유형 | 형식 | 예시 |
|------|------|------|
| 유저 스토리 | `US-NNNN` | US-0001, US-0012 |
| 사양서 | `SPEC-NNNN` | SPEC-0001, SPEC-0012 |
| 스프린트 | `sprint-NNN` | sprint-001, sprint-012 |

- 4자리 제로패딩 (스토리/사양서), 3자리 (스프린트)
- 삭제 시 결번 허용 (재사용 금지)
- 카운터는 `.lia/config.json`의 `counters` 필드에서 관리

## 파일 명명 규칙

`{TYPE}-{NNNN}-{kebab-case-slug}.md`

예시:
- `US-0001-user-authentication.md`
- `SPEC-0003-api-rate-limiting.md`
- `sprint-001/plan.md`

## .lia/ 디렉토리 구조

```
.lia/
├── config.json          # 프로젝트 설정 및 상태 (단일 진실 소스)
├── context.md           # Lia의 프로젝트 메모리 (핵심 컨텍스트)
├── backlog.md           # 우선순위별 백로그
├── stories/             # 유저 스토리 파일
├── specs/               # 기술 사양서 파일
└── sprints/             # 스프린트별 디렉토리
    └── sprint-NNN/
        └── plan.md
```

### config.json 구조

```json
{
  "version": "1.0.0",
  "project": {
    "name": "프로젝트명",
    "description": "한 줄 설명",
    "created": "YYYY-MM-DD",
    "language": "ko"
  },
  "team": {
    "core": ["story-writer", "spec-writer", "developer", "qa", "devops"],
    "custom": []
  },
  "workflow": {
    "activeStory": null,
    "activeSpec": null,
    "activeSprint": null
  },
  "counters": {
    "story": 0,
    "spec": 0,
    "sprint": 0
  }
}
```

### context.md 구조

```markdown
# Project Context
> Last updated: {date}

## Project Overview
## Tech Stack
## Architecture Decisions
## Team
## Current State
## Key Conventions
```

- 중요 이벤트 후 자동 업데이트
- 섹션이 20줄 초과 시 요약/정리
- "Last updated" 항상 갱신

## backlog.md 형식

```markdown
# Backlog

## P0 - Must Have
- [ ] US-0001: {제목} ({N}pt)

## P1 - Should Have
- [ ] US-0003: {제목} ({N}pt)

## P2 - Nice to Have
- [ ] US-0005: {제목} ({N}pt)

## Done
- [x] US-0002: {제목} ({N}pt) — Sprint 001
```

## 스프린트 계획 형식

```markdown
# Sprint NNN Plan

**Goal**: {한 줄 스프린트 목표}
**Duration**: {시작일} ~ {종료일}

## Stories
| ID | Title | Points | Status |
|---|---|---|---|
| US-0001 | ... | 5 | pending |
```

## 상태값

| 값 | 의미 |
|---|---|
| `draft` | DoR 미충족 (질문 미해결, INVEST 미충족 등) |
| `pending` | 시작 전 (DoR 충족, 스프린트 대기) |
| `in-progress` | 진행 중 |
| `done` | 완료 |
| `blocked` | 차단됨 |
| `split` | 분할됨 (원본 스토리, 분할 스토리 ID 참조) |

## 한국어 작성 규칙

- 산출물은 config.json의 `language` 값에 따라 작성
- 한국어: 간결체(다/한다)
- 표준 용어: 사전 조건, 사용자, 기대 결과, 수용 기준
