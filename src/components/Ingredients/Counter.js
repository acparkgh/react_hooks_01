import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1); // This effect depends on the `count` state
  //     // setCount(c => c + 1); // This effect depends on the `count` state
  //     console.log(count);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []); // 🔴 Bug: `count` is not specified as a dependency

  return <h1>{count}</h1>;
}

export default Counter;