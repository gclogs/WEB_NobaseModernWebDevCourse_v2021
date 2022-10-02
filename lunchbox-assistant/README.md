# 조교 도시락

## 12. Apollo 세팅, 부모 컴포넌트로 state 배치 - React TypeScript + GraphQL 실전개발

### 1. 부모 컴포넌트에서 자식 컴포넌트에게 prop 전달하는 방법을 모르겠어요.

> 1. [[React]함수형 컴포넌트에 props 전달](https://developer-talk.tistory.com/228)

> 2. [[react - 기초] props 사용하기 - Class 방식과 Hooks 방식](https://minaminaworld.tistory.com/195)

- 위의 항목을 참고하여 코드를 짜면 된다.

### 2. 예제들을 봐도 잘 모르겠는데요;

```tsx
/** Parent.tsx (부모) */
import Child from './Child.tsx'

export default function Parent() {
  const [props, setProps] = useState([]);

  return (
    <>
      <Child state={props} />
    </>
  )
}

/** Child.tsx (자식) */
export default function Child(props: any) {
  const { props } = props;
  console.log(props);
}
```

- prop 전달이 잘 되는 것을 볼 수 있다.

- 여기서 유의할 점은 왜 부모 컴포넌트에서 자식 컴포넌트를 가져오냐 하는데,

- 자식 컴포넌트로 prop을 보내려면 부모 컴포넌트에서 자식을 호출을 해줘야 prop을 전달할 수 있기 때문이다.
