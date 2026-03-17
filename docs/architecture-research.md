# Software Architecture in the AI Coding Era (2024-2026)

> AI 코딩 도구 시대의 소프트웨어 아키텍처에 대한 리서치 결과 요약

---

## 1. AI 시대에 아키텍처는 더 중요해졌다

- 300+ 오픈소스 저장소 분석: AI 생성 코드의 80~100%에서 아키텍처 안티패턴 발견 (Ox Security)
- 211M 줄 코드 분석: 리팩토링 60% 감소, 코드 복잡도 41% 증가 (GitClear)
- CTO 89%: AI 코드로 프로덕션 장애 경험 (Final Round AI)
- AI 생성 코드 보안 결함률: 45% (Veracode)
- 기술 부채 월 복리 23%: $1K → 6개월 후 $30K

AI가 코드를 더 빨리 생성 → 나쁜 아키텍처가 더 빨리 확산. 명시적 가이드라인 없이 AI 사용 시 스파게티 아키텍처가 전례 없는 속도로 생성됨.

## 2. 아키텍트 역할의 변화

- 상아탑 아키텍트 → 임베디드 퍼실리테이터
- 2023: 35% 가치 인정 → 2025: 47% (+12%)
- 아키텍처 필수 동의: 67% → 77%
- 판단력은 그대로, 도구가 역량을 증폭
- 소규모 팀: 전담 아키텍트 불필요, 아키텍처적 사고 필요

## 3. ADR (Architecture Decision Records)

- 간결 (1~2페이지), Context/Decision/Consequences 구조
- 상태: Proposed → Accepted → Deprecated → Superseded
- Markdown + Git이 2025 표준 (AWS, Microsoft, UK Government 채택)
- AI가 코드 분석 기반 ADR 초안 작성 가능

## 4. AI 코드를 위한 아키텍처 패턴

- 모듈 아키텍처가 AI에 최적 (명확한 경계, 독립 모듈)
- 스파게티 방지: 경계+인터페이스, API 계약, 단일 책임, 일관된 패턴
- CLAUDE.md에 패턴을 문서화하여 AI가 따르도록

## 5. 기술 스택 선택

- "Boring Technology" 운동: 검증된 기술이 AI 학습 데이터에도 풍부
- 잘못된 스택 선택 비용: 평균 $2.3M, 31.1% 프로젝트 취소
- 선택 기준: 비즈니스 목표, 기술 요구사항, 팀 역량, 비용

## 6. Evolutionary Architecture & Fitness Functions

- Last Responsible Moment: 결정 비용 < 미결정 비용일 때 결정
- Fitness Function: 아키텍처 건강도 자동 검증 (응답시간, 배포빈도 등)
- AI 코드에 특히 유용: 아키텍처 제약 자동 검증

## 7. Walking Skeleton

- 최소 E2E 구현으로 아키텍처 검증 (Alistair Cockburn)
- Walking Skeleton 먼저 → MVP
- AI가 스캐폴딩 생성, 아키텍트가 구조 정의

## 8. CLAUDE.md = AI를 위한 아키텍처 문서

- 효과적 CLAUDE.md의 72.6%가 아키텍처 가이드라인 포함
- 포함: WHY/WHAT/HOW, 코딩 컨벤션, 명령어, 아키텍처 결정, 디렉토리 구조
- 잘 구조화된 코드베이스는 30~50% 적은 토큰으로 컨텍스트 제공

## Sources

- Ox Security 2025, GitClear 2024, Final Round AI 2025
- O'Reilly 2026 Signals, Neal Ford & Rebecca Parsons
- Alistair Cockburn, AWS Architecture Blog, C4 Model
- Addy Osmani LLM Workflow 2026, CodeAI.md
