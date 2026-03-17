---
name: team-building
description: >
  프로젝트 아키텍처 기반 전문 에이전트 팀 구성 가이드.
  팀 구성, 리크루팅, 에이전트 추가, 역할 배정 시 자동 활성화.
user-invocable: false
---

# 팀 구성 가이드

프로젝트의 기술 스택과 규모에 맞는 전문 에이전트 팀을 동적으로 구성하는 가이드.

## 에이전트 템플릿 라이브러리

- 개발자 템플릿: [developer-templates.md](references/developer-templates.md)
- QA 템플릿: [qa-templates.md](references/qa-templates.md)
- DevOps 템플릿: [devops-templates.md](references/devops-templates.md)

---

## 기술 스택 → 역할 매핑

### 프론트엔드

| 기술 | 에이전트 이름 | 핵심 역할 |
|------|-------------|----------|
| React / Next.js | `nextjs-developer` | React 컴포넌트, App Router, SSR/SSG |
| Vue / Nuxt | `vue-developer` | Vue 컴포넌트, Composition API |
| Svelte / SvelteKit | `svelte-developer` | Svelte 5 runes, SvelteKit |
| Angular | `angular-developer` | Angular 컴포넌트, RxJS |
| React Native | `rn-developer` | 크로스 플랫폼 모바일 |
| Flutter | `flutter-developer` | Dart, 위젯 트리 |

### 백엔드

| 기술 | 에이전트 이름 | 핵심 역할 |
|------|-------------|----------|
| Express / Fastify | `node-api-developer` | Node.js REST/GraphQL API |
| Django / FastAPI | `python-api-developer` | Python 웹 API |
| Rails | `rails-developer` | Ruby on Rails MVC |
| Go (net/http, Gin) | `go-developer` | Go 서비스 |
| Spring Boot | `spring-developer` | Java/Kotlin API |

### 모바일 (네이티브)

| 기술 | 에이전트 이름 | 핵심 역할 |
|------|-------------|----------|
| Swift / SwiftUI | `ios-developer` | iOS 네이티브 앱 |
| Kotlin / Jetpack Compose | `android-developer` | Android 네이티브 앱 |

### 데이터베이스

| 기술 | 에이전트 이름 | 핵심 역할 |
|------|-------------|----------|
| PostgreSQL + Prisma/Drizzle | `db-specialist` | 스키마 설계, 마이그레이션, 쿼리 최적화 |
| MongoDB | `mongodb-specialist` | 도큐먼트 설계, 인덱싱 |
| Supabase | `supabase-developer` | Auth, Storage, Edge Functions |

---

## 팀 규모 가이드라인

| 프로젝트 규모 | 에이전트 수 | 예시 구성 |
|-------------|-----------|----------|
| **소규모** (MVP, 1인 개발) | 2~3 | fullstack-developer + tester |
| **중규모** (팀 프로젝트) | 4~6 | frontend + backend + db + tester + deployer |
| **대규모** (복잡한 시스템) | 6~8 | 위 + mobile + api-tester + infra-engineer |

### 풀스택 개발자 (소규모 프로젝트)

소규모 프로젝트에서는 기술별로 분리하지 않고, `fullstack-developer`를 1명 생성할 수 있다.
architecture.md에서 기술 스택이 단순하면 (예: Next.js + SQLite) 풀스택으로 구성.

---

## 에이전트 생성 공통 규칙

모든 동적 생성 에이전트에 포함해야 할 공통 요소:

### 프론트매터

```yaml
---
name: {kebab-case-name}
description: >
  {역할 설명}. {기술 키워드}.
  Use when {트리거 조건}.
model: sonnet
tools: {역할별 도구}
color: {역할별 색상}
---
```

### 색상 규칙

| 역할 유형 | 색상 |
|----------|------|
| 개발자 (프론트/백/풀스택) | cyan |
| DB/데이터 전문가 | blue |
| QA/테스터 | green |
| DevOps/배포 | yellow |
| 디자이너/UX | magenta |

### 공통 시스템 프롬프트 요소

모든 개발자 에이전트에 포함:
1. **TDD 원칙**: Red → Green → Refactor
2. **프로젝트 컨벤션 참조**: "CLAUDE.md를 읽고 프로젝트 규칙을 따른다"
3. **사양서 기반 작업**: "Spec의 AC를 테스트 케이스로 변환"
4. **Lia 보고 프로토콜**: 작업 완료 시 결과 보고 형식

모든 QA 에이전트에 포함:
1. **Write 도구 없음**: 코드 수정 불가, 보고만
2. **AC 기반 검증**: 사양서의 수용 기준 체크리스트
3. **테스트 실행**: Bash로 테스트 명령 실행

모든 DevOps 에이전트에 포함:
1. **배포 안전**: 사용자 확인 후 실행
2. **환경 관리**: 환경변수, 시크릿 처리 규칙
3. **롤백 계획**: 배포 실패 시 대응

---

## 팀 구성 결정 프로세스

### 1단계: 기술 스택 분석

architecture.md에서 다음을 추출:
- 프론트엔드 프레임워크
- 백엔드 프레임워크
- 데이터베이스
- 배포 플랫폼
- 테스트 전략

### 2단계: 역할 결정

위 매핑 테이블을 참조하여 필요한 에이전트 목록을 작성한다.

**판단 규칙**:
- 프론트/백엔드가 같은 언어면 풀스택 1명도 가능
- DB가 복잡하면 (다중 DB, 마이그레이션 필요) DB 전문가 별도
- 배포가 단순하면 (Vercel 원클릭) DevOps 없이 진행 가능
- 테스트가 중요한 프로젝트 (의료, 금융) → QA 전문가 필수

### 3단계: 에이전트 생성

- `.claude/agents/{name}.md`에 에이전트 파일 생성
- 해당 기술의 템플릿을 기반으로 커스터마이즈
- 프로젝트 특정 정보 (컨벤션, 명령어 등)를 CLAUDE.md에서 추출하여 포함

### 4단계: 팀 등록

- `.lia/config.json`의 `team.custom`에 에이전트 이름 추가
- `.lia/context.md`의 Team 섹션 업데이트
