import React from 'react';
import { useState } from 'react';
function App() {
  let count = 0;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "React components "), /*#__PURE__*/React.createElement(Time, {
    time: count
  }), /*#__PURE__*/React.createElement(Counter, null), /*#__PURE__*/React.createElement("input", {
    placeholder: "type here"
  }));
}
function Counter() {
  const [count, setCount] = useState(0);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1),
    suppressHydrationWarning: true
  }, "Click me! ", count);
}
function Time({
  time
}) {
  return /*#__PURE__*/React.createElement("p", null, time);
}
export default App;