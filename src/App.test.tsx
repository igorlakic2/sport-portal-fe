import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  test("renders the App component", () => {
    render(<App />);
    const headingReact = screen.getByRole("heading", {
      name: /react/i,
    });

    expect(headingReact).toBeInTheDocument();
  });
});
