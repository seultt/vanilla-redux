# Redux

Learning Vanilla-Redux and React-Redux
Javascript application 들의 상태를 관리하는 방법

강의: [노마드코더-초보자를 위한 리덕스 101](https://nomadcoders.co/redux-for-beginners/lobby)

목적: 리덕스 기본기 다시 공부

## Vanilla Redux

- createStore: store 생성
- store: data 저장소
  - getState: 현재 상태 트리 반환
  - dispatch(action): 상태 변경 트리거
    - action(Object): 변경 사항을 설명하는 일반 객체
  - subscribe(listener): 상태 트리가 변경될 때마다 호출되는 콜백
- reducer: 새 상태 반환 함수

  - (state, action) => newState

> [리덕스 공식문서](https://redux.js.org/)

## React Redux

store 를 subscribe 하고 React 에서 rerender 하기 위해 사용하는 Redux UI 바인딩 라이브러리.

## Redux Toolkit

- Redux boilerplate
- Redux 소스코드 양을 줄여 준다.
- Redux Toolkit 에 immer.js 가 작동이 되어 새로운 state 를 반환하거나 현재 state 에 mutate 가 가능하다.
- createSlice 를 사용하여 모두(reducer, action...) 캡슐화 해준다.
