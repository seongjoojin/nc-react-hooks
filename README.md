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
