import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
};

describe("Sidebar", () => {
  it("should display the correct title", async () => {
    renderComponent();

    expect(screen.getByText("Cards")).toBeInTheDocument();
    expect(screen.getByText("History")).toBeInTheDocument();
  });
});
