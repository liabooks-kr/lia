# Lia — 에이전트 기반 애자일 팀 플러그인

## Context

애자일 + SDD(Specification-Driven Development) 워크플로우를 AI 에이전트 팀으로 자동화한다. 리아(Lia)가 팀 리더로서 사용자 요청을 분석하고 적절한 팀원 에이전트에게 위임한다. 플러그인으로 패키징하여 모든 프로젝트에서 재사용 가능하게 한다.

**설계 원칙** (Anthropic 공식 가이드라인):
- Orchestrator-Worker 패턴: Lia가 분석/위임, 팀원이 실행
- 전문화: 각 에이전트는 하나의 역할에 집중
- 도구 최소 권한: 역할별 필요한 도구만 부여
- 단순성 우선: 역할이 진짜 구분되는 경우에만 에이전트로

---

## 플러그인 구조

```
lia/
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   └── lia.md                    # /lia 슬래시 커맨드
├── agents/
│   ├── lia.md                    # 리아 (오케스트레이터)
│   ├── product-owner.md          # PO — 유저 스토리 작성
│   ├── spec-writer.md            # 사양서 작성
│   ├── developer.md              # TDD 기반 구현
│   ├── qa.md                     # 테스트/검증
│   └── devops.md                 # 빌드/배포/인프라
├── skills/
│   ├── agile-conventions/
│   │   └── SKILL.md              # 애자일 워크플로우 가이드
│   └── story-format/
│       ├── SKILL.md              # 스토리/사양서 템플릿
│       └── references/
│           ├── story-template.md
│           └── spec-template.md
└── README.md
```

---

## 핵심 파일 정의

### plugin.json

```json
{
  "name": "lia",
  "version": "1.0.0",
  "description": "Lia — AI 에이전트 기반 애자일 팀. 유저 스토리, 사양서, 구현, QA, 배포를 에이전트 팀이 수행",
  "author": "min"
}
```

### /lia 커맨드 (`commands/lia.md`)

```yaml
name: lia
description: Lia에게 프로젝트 관리 작업 요청. 예: /lia 현재 스프린트 상태 알려줘
argument-hint: [요청 내용]
```

사용자의 요청을 Lia 에이전트에게 전달하는 진입점.

---

## 에이전트 정의

### Lia 에이전트 (`agents/lia.md`)

```yaml
name: lia
description: >
  프로젝트 관리 오케스트레이터. '리아야', '리아', 'lia', 프로젝트 상태,
  스프린트, 백로그, 유저 스토리, 사양서 등 애자일 관련 요청 시 자동 트리거.
tools: Task, Read, Write, Edit, Glob, Grep, Bash
model: opus
```

**핵심 역할**:
- 사용자 요청 분석 → 적합한 팀원에게 위임
- 프로젝트 상태 파악 (docs/agile/ 구조 읽기)
- 스프린트 계획/관리
- 백로그 우선순위 관리
- 위임 결과 종합하여 보고

**위임 규칙**:

| 요청 유형 | 위임 대상 | 병렬 가능 |
|---|---|---|
| 유저 스토리 작성 | product-owner | Yes (여러 스토리) |
| 사양서 작성 | spec-writer | Yes (여러 사양서) |
| 기능 구현 | developer | No |
| 테스트/검증 | qa | No |
| 배포/인프라 | devops | No |
| 상태 조회/계획 | Lia 직접 처리 | - |

### Product Owner (`agents/product-owner.md`)

```yaml
name: product-owner
description: 유저 스토리를 작성하거나 백로그를 정리할 때 사용
tools: Read, Write, Glob, Grep
model: sonnet
```

**역할**: 프로젝트 문서 → 유저 스토리 변환
- 프로젝트 계획서/요구사항 문서 읽기
- story-format 스킬의 템플릿에 따라 스토리 작성
- 출력: `docs/agile/stories/US-NNNN-slug.md`
- 우선순위(P0/P1/P2), 스토리 포인트 산정
- 기존 스토리와 번호 중복 방지

### Spec Writer (`agents/spec-writer.md`)

```yaml
name: spec-writer
description: 유저 스토리를 기술 사양서로 변환할 때 사용
tools: Read, Write, Glob, Grep, Bash
model: sonnet
```

**역할**: 유저 스토리 → 구현 가능한 기술 사양서
- 유저 스토리 + 코드베이스 분석
- 파일 경로, 인터페이스, API 계약, DB 스키마 명시
- 수용 기준 → 검증 방법 매핑
- 출력: `docs/agile/specs/SPEC-NNNN-slug.md`

### Developer (`agents/developer.md`)

```yaml
name: developer
description: 사양서를 기반으로 TDD 방식으로 기능을 구현할 때 사용
tools: Read, Write, Edit, Glob, Grep, Bash
model: sonnet
skills: kent-beck-test
```

**역할**: 사양서 → TDD로 구현
- 사양서의 수용 기준 → 테스트 케이스 (Red)
- 테스트 통과하는 최소 구현 (Green)
- 리팩토링 (Refactor)
- 프로젝트의 CLAUDE.md/컨벤션 준수

### QA (`agents/qa.md`)

```yaml
name: qa
description: 구현이 사양서의 수용 기준을 만족하는지 검증할 때 사용
tools: Read, Glob, Grep, Bash
model: sonnet
```

**역할**: 사양서 기준 검증
- 수용 기준 체크리스트 검증
- 엣지 케이스 테스트
- 테스트 커버리지 확인
- 출력: 검증 보고서 (통과/실패/미검증 항목)
- **Write 도구 없음** — 코드 수정 불가, 보고만 함

### DevOps (`agents/devops.md`)

```yaml
name: devops
description: 빌드, 배포, 인프라 설정, CI/CD, 환경 변수 관리 시 사용
tools: Read, Write, Edit, Glob, Grep, Bash
model: sonnet
```

**역할**: 빌드/배포/인프라
- Railway, Cloudflare 등 인프라 관리
- 환경변수 설정
- 빌드 에러 진단
- use-railway 스킬 활용

---

## 스킬 정의

### agile-conventions (`skills/agile-conventions/SKILL.md`)

애자일 + SDD 워크플로우 가이드:
- 스프린트 사이클: 스토리 → 사양서 → 구현(TDD) → QA → 배포
- docs/agile/ 디렉토리 구조 규칙
- 번호 체계: US-NNNN, SPEC-NNNN, SPRINT-NNN
- 상태 관리: backlog.md의 형식

### story-format (`skills/story-format/SKILL.md`)

유저 스토리 & 사양서 작성 템플릿:

**유저 스토리** (`references/story-template.md`):
- 제목, 사용자 스토리 (역할/기능/가치)
- 수용 기준 (Given/When/Then)
- 우선순위, 스토리 포인트, 기술 노트, 의존성

**사양서** (`references/spec-template.md`):
- 개요, 변경 사항 (새 파일/수정 파일)
- 컴포넌트 인터페이스, API 계약, DB 스키마
- 구현 순서, 수용 기준 매핑, 엣지 케이스

---

## 프로젝트별 산출물 구조

각 프로젝트에서 Lia가 생성하는 파일들:

```
{project}/
└── docs/
    └── agile/
        ├── backlog.md
        ├── stories/
        │   ├── US-0001-slug.md
        │   └── US-0002-slug.md
        ├── specs/
        │   ├── SPEC-0001-slug.md
        │   └── SPEC-0002-slug.md
        └── sprints/
            └── sprint-001/
                └── plan.md
```

---

## 워크플로우

### 스토리 작성
```
"/lia 서비스 1 MVP 스토리 작성해줘" 또는 "리아야, 서비스 1 스토리 만들어줘"
  → Lia (opus)
    → product-owner 위임 (sonnet, 병렬)
      → docs/agile/stories/US-0001-*.md
      → docs/agile/stories/US-0002-*.md
    → backlog.md 업데이트
```

### 사양서 작성
```
"/lia US-0001 사양서 작성해줘"
  → Lia (opus)
    → spec-writer 위임 (sonnet)
      → docs/agile/specs/SPEC-0001-*.md
```

### 구현 (TDD)
```
"/lia SPEC-0001 구현해줘"
  → Lia (opus)
    → developer 위임 (sonnet)
      → 사양서 읽기 → 테스트 작성 (Red) → 구현 (Green) → 리팩토링
```

### 검증
```
"/lia SPEC-0001 검증해줘"
  → Lia (opus)
    → qa 위임 (sonnet)
      → 수용 기준 체크 → 테스트 실행 → 검증 보고서
```

### 배포
```
"/lia 배포해줘"
  → Lia (opus)
    → devops 위임 (sonnet)
      → 빌드 → 배포 → 상태 확인
```

### 상태 조회
```
"/lia 현재 프로젝트 상태 알려줘"
  → Lia 직접 처리 (opus)
    → docs/agile/ 읽기 → 백로그/스프린트 상태 종합 보고
```

---

## 구현 순서

1. **플러그인 스캐폴딩**: `.claude-plugin/plugin.json`, 디렉토리 구조 생성
2. **스킬 작성**: `agile-conventions`, `story-format` (템플릿 포함)
3. **팀원 에이전트 작성**: product-owner → spec-writer → developer → qa → devops
4. **Lia 에이전트 작성**: 오케스트레이터 시스템 프롬프트 (위임 규칙, 팀원 목록)
5. **커맨드 작성**: `/lia` 슬래시 커맨드
6. **테스트**: 전체 워크플로우 1회 실행 (스토리 → 사양서 → 구현 → QA)

---

## 검증 방법

1. **플러그인 로드 확인**: `/reload-plugins` 후 에이전트/커맨드 인식 확인
2. **커맨드 테스트**: `/lia 현재 프로젝트 상태 알려줘`
3. **자동 트리거 테스트**: "리아야, 백로그 보여줘"
4. **위임 테스트**: `/lia 서비스 1 유저 스토리 작성해줘` → PO 에이전트 호출 확인
5. **산출물 검증**: 생성된 스토리/사양서가 템플릿 형식을 따르는지 확인
6. **E2E 테스트**: 스토리 → 사양서 → 구현 → QA 전체 사이클 1회 실행
