---
name: architecture-guide
description: >
  소프트웨어 아키텍처 설계, ADR 작성, 기술 스택 선택, CLAUDE.md 생성 가이드.
  아키텍처, 기술 스택, ADR, 시스템 설계, Walking Skeleton 관련 시 자동 활성화.
user-invocable: false
---

# 아키텍처 설계 가이드

PRD와 Discovery 산출물을 기반으로 기술적 방향을 결정하고 문서화하는 가이드.

## 산출물

전체 템플릿: [architecture-template.md](references/architecture-template.md)
ADR 템플릿: [adr-template.md](references/adr-template.md)

```
.lia/project/
├── architecture.md     # 기술 스택, 시스템 구성도, Walking Skeleton
└── adrs/               # 개별 ADR 파일
    ├── ADR-001-*.md
    └── ADR-002-*.md

{project}/
└── CLAUDE.md           # AI 코딩 도구를 위한 프로젝트 규칙
```

---

## 1. 아키텍처 결정 프로세스

### 입력 분석

다음 순서로 기존 산출물을 분석한다:

1. **PRD** (.lia/project/prd.md): 기술 제약, 핵심 기능, 사용자 플로우
2. **Inception Deck** (.lia/project/inception-deck.md): 솔루션 스케치, 리스크, 타임라인
3. **Story Map** (.lia/project/story-map.md): MVP 범위, 기능 의존성
4. **기존 코드** (있으면): package.json, tsconfig.json, 디렉토리 구조 등

### 결정 계층 (Last Responsible Moment)

| 시점 | 결정 유형 | 예시 |
|------|----------|------|
| **지금 결정** (되돌리기 비쌈) | 플랫폼, 언어, 핵심 프레임워크 | 웹/앱, TypeScript/Python, Next.js/Django |
| **곧 결정** (Stories 전) | 데이터베이스, 인증, API 스타일 | PostgreSQL/MongoDB, OAuth/JWT, REST/GraphQL |
| **나중에 결정** (구현 중) | 라이브러리, 캐싱, 디자인 패턴 | Prisma/TypeORM, Redis 전략, Repository 패턴 |

"지금 결정"과 "곧 결정" 항목만 ADR로 기록한다. "나중에 결정"은 Spec Writer가 사양서에서 다룬다.

### 기술 스택 선택 기준

| 기준 | 질문 | 가중치 |
|------|------|--------|
| 팀 역량 | 팀이 이 기술을 아는가? | 높음 |
| 커뮤니티 | 생태계와 지원이 충분한가? | 높음 |
| AI 친화성 | AI 학습 데이터에 풍부한가? | 중간 |
| 확장성 | 프로젝트 성장을 지원하는가? | 중간 |
| 비용 | 라이선스, 호스팅, 인력 비용은? | 중간 |
| 장기 유지 | 5년 후에도 유지보수 가능한가? | 낮음 |

**"Boring Technology" 원칙**: 검증된 기술(PostgreSQL, Python, React)이 AI 코드 생성에도 유리하다. AI 학습 데이터에 풍부하고 커뮤니티 지원이 강하기 때문.

---

## 2. ADR (Architecture Decision Record)

### 작성 시점

- 기술 스택 선택 시 (언어, 프레임워크, DB)
- 아키텍처 패턴 결정 시 (모놀리스 vs 마이크로서비스)
- 중요한 기술적 트레이드오프 발생 시
- 외부 서비스/라이브러리 선택 시

### 형식

```markdown
# ADR-{NNN}: {결정 제목}

## Status: Proposed / Accepted / Deprecated / Superseded

## Context
{결정의 배경. 어떤 문제를 해결해야 하는가? 어떤 제약이 있는가?}

## Decision
{무엇을 결정했는가? 왜 이 선택을 했는가?}

## Alternatives Considered
{검토한 대안들과 각각의 장단점}

## Consequences
{이 결정의 결과 — 긍정적/부정적 모두}
```

### 규칙

- 한 ADR에 하나의 결정
- 수정하지 않고, 새 ADR로 Supersede
- "왜"가 "무엇"보다 중요
- `.lia/project/adrs/ADR-{NNN}-{slug}.md`에 저장

---

## 3. 시스템 구성도

텍스트 기반 C4 Level 1-2 다이어그램을 architecture.md에 포함한다.

### Level 1: System Context

```
[사용자] → [시스템] → [외부 서비스]
                    → [데이터베이스]
```

### Level 2: Container

```
[사용자]
    ↓
[웹 프론트엔드] → [API 서버] → [데이터베이스]
                            → [외부 API]
                            → [캐시]
```

---

## 4. Walking Skeleton 설계

아키텍처를 검증하는 최소 E2E 구현 경로를 정의한다.

### 원칙

- Story Map의 MVP 라인에서 **가장 단순한 E2E 경로** 1개를 선택
- 모든 주요 아키텍처 컴포넌트를 관통해야 함
- 기능은 최소화하되, 아키텍처는 완전해야 함

### 예시

```
Walking Skeleton: "사용자가 가입하고 아이템 1개를 생성한다"
→ 프론트엔드(가입 폼) → API(회원가입 엔드포인트) → DB(사용자 테이블)
→ 프론트엔드(생성 폼) → API(생성 엔드포인트) → DB(아이템 테이블)
→ 배포(스테이징 환경)
```

---

## 5. CLAUDE.md 초안 생성

architect가 아키텍처 결정 후 프로젝트 루트에 CLAUDE.md 초안을 생성한다.

### 포함할 내용

```markdown
# {프로젝트명}

## 프로젝트 개요
{엘리베이터 피치 기반}

## 기술 스택
{선택한 기술과 그 이유 — ADR 참조}

## 디렉토리 구조
{프로젝트 구조 설명}

## 코딩 컨벤션
{네이밍, 포맷, 파일 구조 규칙}

## 명령어
{빌드, 테스트, 린트, 실행 명령}

## 아키텍처 규칙
{따라야 할 패턴, 금지 패턴}
```

### 크기 제한

150~200줄 이내. 프론티어 모델은 약 150~200개 지시를 따를 수 있음. Claude Code 시스템 프롬프트가 ~50줄을 차지하므로 100~150줄이 실효적 한도.

---

## 6. 미확정 항목 → Spike 제안

결정에 필요한 정보가 부족하면 Spike를 제안한다.

```markdown
## Spike 제안

### SPIKE-001: {제목}
- **질문**: {답을 찾아야 할 질문}
- **시간 제한**: {1~3일}
- **기대 결과**: {스파이크 후 결정할 수 있는 것}
- **관련 ADR**: {이 스파이크가 해결하는 결정}
```
