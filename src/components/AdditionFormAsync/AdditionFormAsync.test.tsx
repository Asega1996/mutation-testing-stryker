import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { AdditionFormAsync } from "./AdditionFormAsync";

describe("AdditionFormAsync", () => {
  it("should render inputs boxes", () => {
    const { getAllByRole } = render(<AdditionFormAsync />);
    const inputElements = getAllByRole("spinbutton");
    expect(inputElements).toHaveLength(2);

    const resultElement = screen.queryByText("Result:");
    expect(resultElement).toBeNull();
  });

  it("performs async addition and shows result", async () => {
    const { getByPlaceholderText, getByText, findByText } = render(
      <AdditionFormAsync />
    );

    const input1 = getByPlaceholderText("Operator 1");
    const input2 = getByPlaceholderText("Operator 2");
    await userEvent.type(input1, "7");
    await userEvent.type(input2, "3");

    const button = getByText("Add");
    await userEvent.click(button);

    expect(screen.getByText("Calculating...")).toBeDefined();

    const result = await findByText("10");
    expect(result).toBeDefined();
  });

  it("shows error message on invalid input (missing operator1)", async () => {
    const { getByPlaceholderText, getByText } = render(<AdditionFormAsync />);

    const input2 = getByPlaceholderText("Operator 2");
    await userEvent.type(input2, "3");

    const button = getByText("Add");
    await userEvent.click(button);

    expect(screen.getByText("Please enter valid numbers")).toBeDefined();
  });

  it("shows error message on invalid input (missing operator2)", async () => {
    const { getByPlaceholderText, getByText } = render(<AdditionFormAsync />);

    const input1 = getByPlaceholderText("Operator 1");
    await userEvent.type(input1, "3");

    const button = getByText("Add");
    await userEvent.click(button);

    expect(screen.getByText("Please enter valid numbers")).toBeDefined();
  });

  it("shows error message on invalid input (missing both operators)", async () => {
    const { getByText } = render(<AdditionFormAsync />);

    const button = getByText("Add");
    await userEvent.click(button);

    expect(screen.getByText("Please enter valid numbers")).toBeDefined();
  });
});
