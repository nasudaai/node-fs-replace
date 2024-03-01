import React from 'react';
import { useState } from 'react'

function App() {

  let count = 0;
  return (
    <>
      <h1>React components </h1>

      <Time time={count} />

      <Counter />
      <input placeholder="type here" />
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}
      suppressHydrationWarning={true}
    >
      Click me! {count}
    </button>
  )
}

function Time({time}) {
  return (
    <p>{time}</p>
  )
}
export default App
