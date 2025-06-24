import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AdditionAsync } from "./AdditionAsync";

describe("AdditionAsync", () => {
  it("renders the result of async addition", async () => {
    const { getByText, findByText } = render(
      <AdditionAsync param1={5} param2={5} />
    );

    const processingText = getByText("Calculating...");
    expect(processingText).toBeDefined();

    const result = await findByText("10", {}, { timeout: 5000 });
    expect(result).toBeDefined();
  });

  it("renders new sum if props changes", async () => {
    const { rerender, findByText } = render(
      <AdditionAsync param1={5} param2={5} />
    );

    const result = await findByText("10", {}, { timeout: 5000 });
    expect(result).toBeDefined();

    rerender(<AdditionAsync param1={4} param2={4} />);
    const newResult = await findByText("8", {}, { timeout: 5000 });
    expect(newResult).toBeDefined();
  });
});
