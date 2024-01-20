import { render, screen } from "@testing-library/react";
import Component from "./component";

describe("Component", () => {
  it("renders component", () => {
    render(<Component />);
    const component = screen.getByText("Hello component!");

    expect(component).toBeInTheDocument();
  });

  it("renders nested component", () => {
    render(<Component />);
    const nestedComponent = screen.getByText("I am nested component!");

    expect(nestedComponent).toBeInTheDocument();
    expect(nestedComponent).toHaveClass("content");
  });
});
