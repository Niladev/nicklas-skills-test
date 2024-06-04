import { fireEvent, render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Transactions } from "./Transactions";

const mockData = [
  {
    id: "2",
    created_at: "2016-01-02T09:00:49-0300",
    counterparty_name: "Amazon",
    debit: true,
    credit: false,
    amount: "-454.02",
    currency: "EUR",
    operation_type: "transfer",
    attachements: [
      {
        url: "https://fakeimg.pl/350x200/?text=Hello",
      },
    ],
  },
  {
    id: "3",
    created_at: "2016-01-02T10:30:49-0300",
    counterparty_name: "Air canada",
    debit: true,
    credit: false,
    amount: "-156.02",
    currency: "EUR",
    operation_type: "purchase",
    attachements: [
      {
        url: "https://fakeimg.pl/350x200/?text=Hello",
      },
    ],
  },
  {
    id: "1",
    created_at: "2016-01-01T08:30:39-0300",
    counterparty_name: "Uber",
    debit: false,
    credit: true,
    amount: "44.20",
    currency: "EUR",
    operation_type: "refund",
    attachements: [
      {
        url: "https://fakeimg.pl/350x200/?text=Hello",
      },
    ],
  },
];

const useApiReturn = {
  data: { transactions: mockData },
  isLoading: false,
  error: null,
};

jest.mock("../../hooks/useApi", () => ({
  useApi: () => useApiReturn,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ transactionId: "3" }),
}));

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <Transactions />
    </BrowserRouter>
  );
};

describe("Transactions", () => {
  it("should render the transactions page", async () => {
    renderComponent();

    expect(screen.getByText("History")).toBeVisible();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(mockData.length + 1);
  });

  it("should navigate to the correct ID when clicking a row", async () => {
    renderComponent();

    expect(screen.getByRole("table")).toBeVisible();

    const row = screen.getAllByRole("row")[2];

    fireEvent.click(row);

    expect(window.location.pathname).toBe(`/transactions/${mockData[1].id}`);
  });

  it("should render the correct transaction when an transaction id is part of the url", async () => {
    renderComponent();

    expect(screen.getByRole("table")).toBeVisible();

    const sidebar = screen.getByTestId("transactionSidebar");

    expect(
      within(sidebar).getByText(mockData[1].counterparty_name)
    ).toBeVisible();
    expect(
      within(sidebar).queryByText("No transactions selected")
    ).not.toBeInTheDocument();
  });
});
