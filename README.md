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
