import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Addition } from "./Addition";

describe("Addition", () => {
  it("renders the addition result", () => {
    const {getByText} = render(<Addition param1={2} param2={3} />);

    const result = getByText("5");

    expect(result).toBeDefined();
  });
});
