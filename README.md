# nc-react-hooks

nomadcoders reack hooks

## 0 Introduction

### 0.2 Workflow

https://codesandbox.io

프리셋을 클릭 후 생성하고 저장하면 fork됨

## #1 useState

### 1.0 Introduction to useState

```tsx
import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

### 1.2 useInput

###### Usage

```jsx
import React from "react";
import { useInput } from "@nc-react-hooks/use-input";

const App = () => {
  const validator = value => !value.includes("@");
  const name = useInput("Mr. ", validator);
  return (
    <>
      <input placeholder="Name" {...name.props} />
    </>
  );
};
```

```jsx
import React from "react";
import { useInput } from "@nc-react-hooks/use-input";

const App = () => {
  const maxLen = (value: string | string[]) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <>
      <input placeholder="Name" {...name} />
    </>
  );
};
```

### 1.3 useTabs

###### Usage

```jsx
import React from "react";
import { useTabs } from "@nc-react-hooks/use-tabs";

interface Icontent {
  tab: string;
  content: string;
}

const content: Icontent[] = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const App = () => {
  const { currentItem, changeIetm } = useTabs(0, content);
  return (
    <>
      {content.map((section, index) => (
        <button onClick={() => changeIetm(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
};
```

## useEffect

### 2.0 Introduction to useEffect

- useEffect는 componentWillUnmount와 componentDidMount, componentWillUpdate와 비슷함
- useEffect는 2개의 인자를 받는데 첫번째는 function의 effect, 두번째는 deps이며 deps의 값이 변한다면 effect가 실행되도록 합니다. deps가 설정되지 않으면 모든 값 변화에 반응함
- 어떤 경우에도 실행되고 싶지 않게 하려면 deps에 빈 디펜던시를 전해주면 됨.

### 2.1 useTitle

React Hook to update your document's title.

##### Installation

###### yarn

`yarn add @nc-react-hooks/use-title`

###### npm

`npm i @nc-react-hooks/use-title`

##### Usage

```jsx
import React from "react";
import { useTitle } from "@nc-react-hooks/use-title";

function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```

##### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title you want to use on your document | yes      |
