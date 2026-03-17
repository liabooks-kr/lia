---
name: discovery-guide
description: >
  프로젝트 초기 Discovery 활동 가이드. Inception Deck, 페르소나 정의,
  Story Mapping 진행 시 자동 활성화. 프로젝트 비전, 사용자, 기능 발견 관련.
user-invocable: false
---

# Discovery 활동 가이드

프로젝트 초기에 "왜 만드는가?", "누구를 위해?", "무엇을 만드는가?"를 정의하는 활동.

## 진행 순서

```
1. Inception Deck (비전 정립) → .lia/project/inception-deck.md
2. 페르소나 정의 (사용자 정의) → .lia/project/personas.md
3. Story Mapping (기능 발견) → .lia/project/story-map.md
```

각 활동은 순차적으로 진행한다. 앞 단계의 산출물이 다음 단계의 입력이 된다.

---

## 1. Inception Deck

전체 템플릿: [inception-deck-template.md](references/inception-deck-template.md)

Jonathan Rasmusson(The Agile Samurai)의 10가지 질문으로 프로젝트의 핵심을 정의한다.

### 10가지 질문

| # | 질문 | 목적 |
|---|------|------|
| 1 | 왜 여기 모였는가? | 프로젝트 동기와 비즈니스 맥락 |
| 2 | 엘리베이터 피치 | 30초 제품 설명 |
| 3 | 프로덕트 박스 | 제품의 핵심 매력 3가지 |
| 4 | NOT 리스트 | 명확하게 하지 않을 것 |
| 5 | 이해관계자 | 누가 이 프로젝트에 관심 있는가 |
| 6 | 사용자 아키타입 | 실제 사용자는 누구인가 |
| 7 | 솔루션 스케치 | 고수준 아키텍처/목업 |
| 8 | 성공 기준 | 어떻게 성공을 측정하는가 |
| 9 | 리스크 | 무엇이 잘못될 수 있는가 |
| 10 | 타임라인 & 예산 | 제약 조건 |

### 진행 방식 (3 라운드)

**Round 1: 비전** (질문 1, 2, 4)
- 왜 만드는가? → 엘리베이터 피치 → NOT 리스트
- 프로젝트의 존재 이유와 범위를 확립

**Round 2: 사용자 & 솔루션** (질문 3, 5, 6, 7)
- 프로덕트 박스 → 이해관계자 → 사용자 아키타입 → 솔루션 스케치
- 누구를 위해 무엇을 만드는지 구체화

**Round 3: 실행** (질문 8, 9, 10)
- 성공 기준 → 리스크 → 타임라인
- 어떻게 측정하고 어떤 제약 안에서 진행하는지

### 엘리베이터 피치 템플릿

> **[타겟 고객]**을 위한, **[니즈/문제]**를 해결하는 **[제품명]**은 **[카테고리]**입니다. **[경쟁 제품]**과 달리, **[핵심 차별점]**을 제공합니다.

---

## 2. 페르소나

전체 템플릿: [persona-template.md](references/persona-template.md)

Inception Deck의 "사용자 아키타입" 답변을 기반으로 주요 사용자 유형을 구체화한다.

### 구성 요소

| 요소 | 설명 |
|------|------|
| 이름 & 역할 | 가상의 이름과 역할 (예: "지민 — 프리랜서 디자이너") |
| 배경 | 나이, 직업, 기술 수준, 사용 환경 |
| 목표 | 제품을 통해 달성하려는 것 |
| 고통 | 현재 겪고 있는 문제 |
| 동기 | 왜 이 제품을 사용하려 하는가 |
| 시나리오 | 전형적인 사용 상황 |

### 작성 규칙

- 2~3개 페르소나 권장 (너무 많으면 초점 흐려짐)
- **Primary 페르소나** 1개를 반드시 지정 (주요 설계 대상)
- 추측이 아닌 리서치 기반으로 (인터뷰, 설문, 데이터)
- AI가 초안을 만들되, 사용자가 검증하고 수정

---

## 3. Story Mapping

전체 템플릿: [story-map-template.md](references/story-map-template.md)

Jeff Patton의 기법으로 사용자 여정을 스토리로 매핑하고 MVP를 추출한다.

### 구조

```
가로축 (시간 순서): 사용자 여정의 활동
세로축 (우선순위):  각 활동의 스토리 (위 = 핵심, 아래 = 부가)

──────── MVP 라인 ────────
MVP 위: 첫 릴리스에 포함
MVP 아래: 후속 릴리스
```

### 작성 순서

1. **Backbone (척추)**: 사용자 여정의 주요 활동을 시간 순서로 나열
2. **Walking Skeleton**: 각 활동에서 최소 1개 필수 스토리 배치
3. **Body**: 각 활동 아래에 추가 스토리를 우선순위별로 배치
4. **MVP 라인**: 수평선을 그어 첫 릴리스 범위를 구분
5. **릴리스 계획**: MVP 이후 릴리스별로 추가 라인

### Story Map → Story Writer 연결

Story Map에서 추출된 스토리 제목들은 story-writer 에이전트가 상세화한다:
- Story Map의 각 항목 → US-NNNN 유저 스토리로 변환
- Map의 우선순위 → 스토리의 Priority (P0/P1/P2) 매핑
- MVP 라인 위 항목 → P0 (Must Have)

---

## 산출물 저장 경로

| 산출물 | 경로 |
|--------|------|
| Inception Deck | `.lia/project/inception-deck.md` |
| 페르소나 | `.lia/project/personas.md` |
| Story Map | `.lia/project/story-map.md` |
