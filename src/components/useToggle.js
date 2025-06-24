import { useState } from "react";

export const useToggle = (initialVal = false) => {
  const [state, setstate] = useState(initialVal);

  const toggle = () => {
    setstate((prev) => !prev);
  };
  return [state, toggle];
};

// updated on git
// second update on the original branch
//   //   isLoading,
//   //   error,
