# 「ver.2021 노베이스 모던 웹개발 코스」 React TypeScript + GraphQL 실전개발

# 노베로 시작하기!
## React __Fragments__

1. [[공식 문서] Fragments - React](https://ko.reactjs.org/docs/fragments.html)
2. [React Fragments 사용이유 및 사용법](https://velog.io/@lilyoh/React-Fragments-%EC%82%AC%EC%9A%A9%EC%9D%B4%EC%9C%A0-%EB%B0%8F-%EC%82%AC%EC%9A%A9%EB%B2%95)

> 따라하면서의 애로사항들을 정리해놓았습니다.

## 1. [[React] Link를 통해 State 전달하기 ( Router v6 )](https://intrepidgeeks.com/tutorial/forwarding-status-via-responselink-router-v6)

- `2021버전을 보고 따라하다가 왜 오류가 나지?` 하는 분들을 위해 링크를 걸어 두었습니다.

- [3. 라우터 props - React TypeScript + GraphQL 실전개발](https://youtu.be/dM9AQ5ay464?list=PLLDrd87CR4wh9w1rcWDJW6CNnFE2ASRYa) 를 따라하다가 막힘이 있을겁니다. 그때 위의 자료를 보고 수정하시면 됩니다.

## 2. [[React] React-router-dom V6 업데이트 관련 유의사항](https://velog.io/@gyrbs22/React-React-router-dom-V6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EA%B4%80%EB%A0%A8-%EC%9C%A0%EC%9D%98%EC%82%AC%ED%95%AD)

## 3. [[React] console.log가 두번 실행된다고?](https://velog.io/@hyes-y-tag/React-useEffect%EA%B0%80-%EB%91%90%EB%B2%88-%EC%8B%A4%ED%96%89%EB%90%9C%EB%8B%A4%EA%B3%A0)

- 유의한게 있는데 `<Link>` 에서는 이제 prop 전달을 하지 않는답니다.

- hooks를 통해 별개의 저장소를 이용해 전달을 해야한다고... 씨발;


# 참고자료
## React Hook
1. [리액트의 Hooks 완벽 정복하기](https://velog.io/@velopert/react-hooks)

2. [[TypeScript] useState에서 type 지정](https://velog.io/@jjburi/TypeScript-useState%EC%97%90%EC%84%9C-type-%EC%A7%80%EC%A0%95)

- useState를 사용하다가 타입 배정을 어떻게 해야할지 모를 때가 있습니다. 실제로 인터페이스를 만들어 넣어도 오류가 나구요.

- 그 상황을 대비하여 위 링크를 참고해주시면 되겠습니다.

3. [React useState list에 push 하기 - state에 리스트를 쓰고 싶어요](https://liebe97.tistory.com/13)

4. [[TypeScript]인덱스 시그니처(Index Signature) 사용 방법](https://developer-talk.tistory.com/297)