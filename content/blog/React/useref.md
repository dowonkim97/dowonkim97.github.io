---
title: React에서 UseRef란?
date: 2023-11-15 14:11:85
category: React
thumbnail: { thumbnailSrc }
draft: false
---

### UseRef란

---

공식문서에서 `useRef`는 “a React Hook that reference a value that’s not needed for rendering”

**"렌더링에 필요하지 않은 값 참조할 수 있게 해주는 리액트 훅”**이라고 정의되어 있습니다.

```jsx
const ref = useRef(initialValue)
console.log(ref) // { current: initalValue }
```

`useRef`는 항상 `{object}`의 값을 리턴하고, 안에는 `.current` 프로퍼티에 저장합니다. 저장하는 값은 모두 이곳에 담깁니다.

초기값인 `initialValue`를 넣을 수 있고, 첫 렌더링에만 값이 적용되며, 다음 렌더링에는 값이 적용되지 않습니다.

### DOM 노드 저장 및 내장 메소드를 사용할 수 있다.

---

```jsx
const nodeRef = useRef()

return <View ref={nodeRef} />
```

### TypeScript에서 useRef란?

---

```tsx
interface RefObject<T> {
  readonly current: T | null
}

interface MutableRefObject<T> {
  current: T
}
```

RefObject의 정의를 보면 초기값을 `.current`에 저장합니다.

```jsx
const localVarRef = useRef < number > 0
```

로컬 변수 용도로 사용할 경우 `MutableRefObject<T>` 제네릭 타입과 같은 타입의 초깃값을 넣어줍니다.

```jsx
const inputRef = useRef < HTMLInputElement > null
```

DOM을 직접 조작하기 위해 사용할 경우 `RefObject<T>` 초깃값으로 `null`을 넣어줍니다.

## References

[https://react.dev/reference/react/useRef](https://react.dev/reference/react/useRef)

[https://driip.me/7126d5d5-1937-44a8-98ed-f9065a7c35b5](https://driip.me/7126d5d5-1937-44a8-98ed-f9065a7c35b5)

---
