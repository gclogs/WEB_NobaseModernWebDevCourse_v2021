import Router from 'koa-router';

const api = new Router();

api.get('/', (ctx: any, next: any) => {
  console.log(typeof ctx)
  ctx.body = '홈';
})

api.get('/about', (ctx: any, next: any) => {
  ctx.body = '소개';
})

api.get('/about/:name', (ctx: any, next: any) => {
  const { name } = ctx.params; // 라우트 경로에서 :name 으로 정의된 값이 ctx.params 값에 할당됨.
  ctx.body = name + '의 소개'; 
})

api.get('/post', (ctx: any, next: any) => {
  const { id } = ctx.request.query;
  if (id) {
    ctx.body = '포스트 #' + id; // post?id=10 등으로 작성된 쿼리는 ctx.request.query에 파싱됨
  } else {
    ctx.body = '포스트 아이디가 없습니다.'
  }
})

export default api;