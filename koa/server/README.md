# 백엔드 잡아벌기 (2022.11.01)

# Koa로 다 뽀사버리기
https://backend-intro.vlpt.us/
https://code-masterjung.tistory.com/46

## Koa 시작하기
- 음... 라우트 문제인지 계속 패스 에러가 뜬다.
- pacakage.json 스크립트 옵션쪽의 세팅 문제인지 살펴보았지만 express에서는 문제 없이 동작하는 거 보니..
- 그냥 koa의 고질적인 문제인가?

- tsconfig.json 파일도 문제인가 살펴봤지만 전혀 문제가 없었다.
- 그냥 express 써야겠다.. 익숙해지면 뭐 fastify 로 넘어가는 거고

> install
```
yarn add -D typescript ts-node nodemon @types/koa @types/node
yarn add -D eslint eslint-config-prettier @typescript-eslint/parser
```

> package.json
```json
  "scripts": {
    "dev": "NODE_ENV=development nodemon --watch ./src --exec \"ts-node-esm --transpileOnly ./src/server.ts\" -e ts"
  },
```

## Fastify 써본 후기

### 단점
- 자료가 너무너무너무 없음
- 영문 자료들이 많은데 대부분 튜토리얼임
- 공식 사이트에서 docs 보고 따라하려니 너무 중구난방이고, 초심자를 배려하지 않았음
- 내가 멍청한 것도 한몫함..

### 장점
- 속도 및 지원하는 플러그인은 express, koa를 넘어벌임 (최고)

### 결론
- Express를 쓰려니.. 꾸졌고 그냥 Koa나 쓰렵니다.
- 그러다가 어느정도 초석이 다져지면 Fastify로 넘어갈 것임
