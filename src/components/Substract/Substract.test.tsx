import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Subtract } from "./Substract";

describe("Subtract", () => {
  it("renders the addition result", () => {
    const { getByText } = render(<Subtract param1={5} param2={3} />);

    const result = getByText("2");

    expect(result).toBeDefined();
  });
});
