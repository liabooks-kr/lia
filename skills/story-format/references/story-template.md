# US-{NNNN}: {동사형 제목}

## Story

<!-- 아래 포맷 중 하나를 선택하여 사용. 기본값: Classic -->

### Classic 포맷

**As a:** {페르소나 — 구체적 역할과 맥락}
**I want to:** {원하는 행동}
**So that:** {달성하려는 가치/이유}

### Job Story 포맷

**When:** {상황/컨텍스트 — 사용자가 처한 구체적 상황}
**I want to:** {동기/원하는 행동}
**So I can:** {기대 결과/달성하려는 가치}

### FDD 포맷

**Action:** {동사} the {결과} {by|for|of|to} a(n) {대상}

### Problem-Goal 포맷

**Problem:** {현재 문제 상황 — 구체적으로}
**Goal:** {달성하려는 목표}

---

## Acceptance Criteria

### AC-1: {시나리오명 — 해피 패스}
- **Given:** {사전 조건}
- **When:** {사용자 행동/트리거}
- **Then:** {기대 결과}

### AC-2: {시나리오명 — 대안 흐름}
- **Given:** {사전 조건}
- **When:** {사용자 행동/트리거}
- **Then:** {기대 결과}

### AC-3: {시나리오명 — 에러 케이스}
- **Given:** {사전 조건}
- **When:** {잘못된 입력/예외 상황}
- **Then:** {에러 처리 결과}

## Metadata

| Field | Value |
|---|---|
| Priority | P0 / P1 / P2 |
| Story Points | {1/2/3/5/8/13} |
| Status | draft / pending |
| Format | Classic / Job Story / FDD / Problem-Goal |
| DoR | Ready / Not Ready ({미충족 항목}) |
| Sprint | — |

## Technical Notes

{구현 시 참고할 정보. AC가 아닌 힌트/제안 수준.}
- 예: "lib/auth에 기존 OAuth 유틸 있음"
- 예: "현재 응답 시간 300ms, 목표 200ms"

## Dependencies

{관련 스토리 ID, 외부 의존성}

## Open Questions

{미해결 질문. 모두 해결되면 이 섹션 삭제하고 DoR을 Ready로 변경.}

## Definition of Done (참조)

이 스토리에 AC 외 추가로 적용되는 팀 품질 기준:
- [ ] 모든 AC 충족 (테스트 통과)
- [ ] 코드 리뷰 완료
- [ ] 단위 테스트 작성 및 통과
- [ ] 기존 테스트 회귀 없음
- [ ] 문서 업데이트 (필요 시)
