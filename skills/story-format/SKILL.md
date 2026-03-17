---
name: story-format
description: >
  유저 스토리 및 기술 사양서 작성 템플릿과 품질 기준.
  스토리/사양서 작성, INVEST 검증, AC 정의, 스토리 분할, 포맷 선택 시 자동 활성화.
user-invocable: false
---

# 유저 스토리 & 사양서 작성 가이드

## 유저 스토리 형식

전체 템플릿: [story-template.md](references/story-template.md)

### 스토리 포맷 종류

| 포맷 | 구조 | 적합한 상황 |
|------|------|------------|
| Classic | As a [role], I want [feature], so that [benefit] | 사용자 대면 기능 (로그인, 검색, 프로필) |
| Job Story | When [situation], I want to [motivation], so I can [outcome] | 컨텍스트/상황 중심 (알림, 오류 복구) |
| FDD | [Action] the [result] [by\|for\|of\|to] a(n) [object] | 기술/인프라 작업 (DB 마이그레이션, API) |
| Problem-Goal | Problem + Goal statement | 복잡한 도메인 문제 (알고리즘 개선) |

기본값: Classic. 상황에 따라 가장 적합한 포맷을 선택한다.

### 핵심 구조 (Classic)

```markdown
# US-{NNNN}: {동사형 제목}

## Story
**As a:** {페르소나}
**I want to:** {행동}
**So that:** {가치}
```

### 핵심 구조 (Job Story)

```markdown
# US-{NNNN}: {동사형 제목}

## Story
**When:** {상황/트리거 컨텍스트}
**I want to:** {동기/행동}
**So I can:** {기대 결과/가치}
```

### 핵심 구조 (FDD / Problem-Goal)

FDD: `[동사] the [결과] [by|for|of|to] a(n) [대상]`
Problem-Goal: Problem 섹션 + Goal 섹션으로 구성

### INVEST 기준 검증

모든 스토리는 작성 후 INVEST 기준으로 검증한다:

| 기준 | 질문 | 미충족 시 |
|------|------|----------|
| **I**ndependent | 독립적으로 구현 가능한가? | 의존 관계 명시 또는 분리 |
| **N**egotiable | 구현 방법이 유연한가? | AC에서 구현 상세 제거 |
| **V**aluable | 사용자에게 가치를 전달하는가? | "So that" 절 강화 |
| **E**stimable | 추정 가능한 크기인가? | 스파이크 제안 또는 SPIDR 분할 |
| **S**mall | 한 Sprint에 완료 가능한가? | SPIDR 분할 제안 |
| **T**estable | 테스트 가능한가? | AC의 Then 구체화 |

### 스토리 포인트 스케일

| 포인트 | 의미 |
|--------|------|
| 1 | 매우 간단. 설정 변경, 텍스트 수정 수준 |
| 2 | 간단. 단일 컴포넌트 수정 |
| 3 | 보통. 2-3개 파일 수정, 새 컴포넌트 1개 |
| 5 | 복잡. 여러 컴포넌트, API 연동 |
| 8 | 매우 복잡. 새 시스템 구성요소. 분할 검토 |
| 13 | 에픽 수준. 분할을 강력히 권장 |

### AC 작성 규칙

- 스토리당 **3~5개** 권장 (6개 이상이면 스토리 분할 검토)
- 각 AC는 Given/When/Then 형식
- Then은 **검증 가능한** 구체적 결과
- 최소 구성: 해피 패스 1개 + 에러 케이스 1개

**AC 안티패턴**:
- "잘 동작한다" → 구체적 검증 기준 필요
- "빠르게 응답한다" → 수치 기준 필요 (예: 200ms 이내)
- "직관적이어야 한다" → 측정 가능한 기준으로 (예: 5클릭 이내 완료)
- 구현 방법을 지정하는 AC → 결과만 명시 ("Redis 사용" ✗ → "2초 이내 응답" ✓)
- "As a user" 구체적 역할 없이 → 페르소나를 명확히
- 6개 이상의 AC → 스토리 분할 고려
- 에러/예외 케이스 누락 → 최소 1개 필수

### SPIDR 스토리 분할

스토리가 너무 클 때 (8pt 이상, 또는 Small/Estimable 미충족) 5가지 차원으로 분할:

| 차원 | 질문 | 예시 |
|------|------|------|
| **S**pike | 미지의 영역이 있는가? | "OAuth 연동 가능성 조사" 스파이크 생성 |
| **P**ath | 대안 경로로 나눌 수 있는가? | 해피 패스 / 에러 처리 / 관리자 플로우 |
| **I**nterface | 채널/플랫폼별로 나눌 수 있는가? | 웹 / 모바일 / API |
| **D**ata | 데이터 범위를 줄일 수 있는가? | 텍스트만 → 이미지 추가 → 동영상 추가 |
| **R**ules | 비즈니스 규칙을 단계적으로 적용할 수 있는가? | 기본 검증 → 고급 검증 → 실시간 검증 |

분할 원칙: 각 분할된 스토리가 **독립적으로 가치를 전달**해야 한다.
안티패턴: UI와 백엔드를 별도 스토리로 분할하는 것 (수직 분할 위반).

### Example Mapping

복잡한 스토리 정제 시 사용하는 구조화 기법 (Matt Wynne):

- **Story** (Yellow): 스토리 자체
- **Rules** (Blue): 수용 기준/비즈니스 규칙
- **Examples** (Green): 각 규칙을 설명하는 구체적 예시
- **Questions** (Red): 미해결 질문

Red 카드가 남아 있으면 스토리는 **Ready가 아니다** (draft 상태).

### Definition of Ready (DoR)

스토리가 스프린트에 포함되기 전 충족해야 할 조건:

- [ ] 스토리가 템플릿 형식을 따른다
- [ ] INVEST 기준 모두 충족 (✅)
- [ ] AC가 명확하고 테스트 가능하다
- [ ] 의존성이 식별되었다
- [ ] 추정 가능한 크기이다 (13pt 이하)
- [ ] 미해결 질문이 없다

**모두 충족**: Status = `pending` | **미충족**: Status = `draft` (미충족 사유 명시)

---

## 기술 사양서 형식

전체 템플릿: [spec-template.md](references/spec-template.md)

### 핵심 구조

```markdown
# SPEC-{NNNN}: {제목}
> Based on: US-{NNNN} — {스토리 제목}

## 1. Overview
## 2. Changes (New Files / Modified Files)
## 3. Interfaces / API Contract
## 4. Data Model
## 5. Implementation Order
## 6. AC Mapping (AC → Test Approach → Pass Criteria)
## 7. Edge Cases
## 8. Security Considerations
```

### 사양서 품질 기준

- 모든 파일 경로는 프로젝트 루트 기준 실제 경로
- 인터페이스는 타입/시그니처 명시
- AC 매핑은 1:1 (누락 없이)
- 구현 순서는 의존성 기준으로 정렬
- 코드베이스 분석 결과 반영 (기존 패턴 준수)
