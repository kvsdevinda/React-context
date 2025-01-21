// src/components/component.test.js
import React from "react";
import { render } from "@testing-library/react";  // Import render from @testing-library/react
import Counter from "./Counter";  // Ensure this path is correct

test("counter displays the correct initial count", () => {
  const { getByTestId } = render(<Counter initialCount={0} />);
  const counterElement = getByTestId("count");
  expect(counterElement.textContent).toBe("0");
});
