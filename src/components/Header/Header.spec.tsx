import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("should display the correct title", async () => {
    const title = "Test title";
    render(<Header title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
