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


test("count should Decrement by one if the Decrement button is click" , () =>{
  const { getByTestId , getByRole } = render(<Counter initialCount={0} />);
  const DecrementBtn = getByRole("button" , {name :"Decrement"});
  fireEvent.click(DecrementBtn);
  const countvalue = Number(getByTestId("count").textContent);
  expect(countvalue).toBe(-1);
});

describe(Counter, () => {
  it("count should restart by one if the restart button is click" , () =>{
    const { getByTestId , getByRole } = render(<Counter initialCount={50} />);
    const RestartBtn = getByRole("button" , {name :"Restart"});
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(RestartBtn);
    const countvalue = Number(getByTestId("count").textContent);
    expect(countvalue).toBe(0);
  });
});

describe(Counter, () => {
  it("count should switchValues by one if the switchValues button is click" , () =>{
    const { getByTestId , getByRole } = render(<Counter initialCount={50} />);
    const switchValuesBtn = getByRole("button" , {name :"Switch Values"});
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchValuesBtn);
    const countvalue = Number(getByTestId("count").textContent);
    expect(countvalue).toBe(-50);
  });
});