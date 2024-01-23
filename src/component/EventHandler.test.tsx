import { render, screen } from "@testing-library/react";
import { Button } from "./EventHandler";
import { act } from "react-dom/test-utils";

describe("Button", () => {
  it("renders button", () => {
    render(<Button />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("renders button with initial count", () => {
    render(<Button />);
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Clicked: 0");
  });

  it("renders button with updated count", () => {
    render(<Button />);
    const button = screen.getByRole("button");

    act(() => {
      button.click();
    });

    expect(button).toHaveTextContent("Clicked: 1");
  });
});
