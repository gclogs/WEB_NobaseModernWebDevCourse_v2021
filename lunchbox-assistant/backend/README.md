# 백엔드 잡아벌기 (2022.11.01)

# Koa로 다 뽀사버리기
https://backend-intro.vlpt.us/
https://code-masterjung.tistory.com/46

## Koa 시작하기

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
