import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Components/Counter";


test("counter displays the correct initial count", () => {
  const { getByTestId } = render(<Counter initialCount={0} />);
  const counterElement = getByTestId("count");
  expect(counterElement.textContent).toBe("0");
});


test("count should Increment by one if the increment button is click" , () =>{
  const { getByTestId , getByRole } = render(<Counter initialCount={0} />);
  const IncrementBtn = getByRole("button" , {name :"Increment"});
  fireEvent.click(IncrementBtn);
  const countvalue = Number(getByTestId("count").textContent);
  expect(countvalue).toBe(1);
});
