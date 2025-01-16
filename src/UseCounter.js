import { useState } from "react";

const UseCounter = (initialValue = 0) => {
  // Correctly using useState to return state and the setter function
  const [count, setCount] = useState(initialValue);

  // Increment function
  const increment = () => setCount(count + 1);

  // Decrement function
  const decrement = () => setCount(count - 1);

  // Return state and functions to be used outside
  return { count, increment, decrement };
};

export default UseCounter;
