import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Main", () => {
  test("renders something", async () => {
    render(<App />);
    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
    expect(screen.getByText("Vite + React")).toBeVisible();
  });
});
