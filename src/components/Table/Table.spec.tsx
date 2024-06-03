import { MemoryRouter } from "react-router-dom";
import { Table } from "./Table";
import { render, screen, within } from "@testing-library/react";
import { TableColumn, Transaction } from "../../types";

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

const defaultColumns: TableColumn<Transaction>[] = [
  {
    label: "Counterparty",
    accessor: "counterparty_name",
    type: "text",
  },
  {
    label: "Method",
    accessor: "operation_type",
    type: "text",
  },
  {
    label: "Payment date",
    accessor: "created_at",
    type: "date",
    sortable: true,
  },
  {
    label: "Amount",
    accessor: "amount",
    type: "currency",
    sortable: true,
  },
];

let sortParams: { [key: string]: string } = { sort_by: "amount", order: "asc" };

const navigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [new URLSearchParams(sortParams)],
  useNavigate: () => navigate,
}));

const onClickMock = jest.fn();

const renderComponent = (
  columns: TableColumn<Transaction>[] = defaultColumns,
  data: Transaction[] = [...mockData]
) => {
  return render(
    <MemoryRouter initialEntries={[`/transactions`]}>
      <Table onRowClick={onClickMock} data={data} columns={columns} />
    </MemoryRouter>
  );
};

describe("Table", () => {
  it("should render the table correctly", async () => {
    renderComponent();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  describe("Rows", () => {
    it("should render the table with the correct number of rows", async () => {
      renderComponent();

      expect(screen.getByRole("table")).toBeInTheDocument();
      expect(screen.getAllByRole("row")).toHaveLength(mockData.length + 1);
      expect(screen.getByText(mockData[0].counterparty_name)).toBeVisible();
    });

    describe("when sort search params are present", () => {
      it("should correctly sort asc on amount", async () => {
        renderComponent();

        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getAllByRole("row")).toHaveLength(mockData.length + 1);

        const rows = screen.getAllByRole("row");

        expect(within(rows[0]).getByText(defaultColumns[0].label));
        expect(within(rows[1]).getByText(mockData[0].counterparty_name));
        expect(within(rows[2]).getByText(mockData[1].counterparty_name));
      });

      it("should correctly sort desc on amount", async () => {
        sortParams = { sort_by: "amount", order: "desc" };
        renderComponent();

        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getAllByRole("row")).toHaveLength(mockData.length + 1);

        const rows = screen.getAllByRole("row");

        expect(within(rows[0]).getByText(defaultColumns[0].label));
        expect(within(rows[1]).getByText(mockData[2].counterparty_name));
        expect(within(rows[2]).getByText(mockData[1].counterparty_name));
      });

      it("should correctly sort asc on created_at", async () => {
        sortParams = { sort_by: "created_at", order: "asc" };
        renderComponent();

        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getAllByRole("row")).toHaveLength(mockData.length + 1);

        const rows = screen.getAllByRole("row");

        expect(within(rows[0]).getByText(defaultColumns[0].label));
        expect(within(rows[1]).getByText(mockData[2].counterparty_name));
        expect(within(rows[2]).getByText(mockData[0].counterparty_name));
      });

      it("should correctly sort desc on created_at", async () => {
        sortParams = { sort_by: "created_at", order: "desc" };
        renderComponent();

        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getAllByRole("row")).toHaveLength(mockData.length + 1);

        const rows = screen.getAllByRole("row");

        expect(within(rows[0]).getByText(defaultColumns[0].label));
        expect(within(rows[1]).getByText(mockData[1].counterparty_name));
        expect(within(rows[2]).getByText(mockData[0].counterparty_name));
      });

      it("should correctly ignore search params that are not sortable", async () => {
        sortParams = { sort_by: "counterparty_name", order: "asc" };
        renderComponent();

        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getAllByRole("row")).toHaveLength(mockData.length + 1);

        const rows = screen.getAllByRole("row");

        expect(within(rows[0]).getByText(defaultColumns[0].label));
        expect(within(rows[1]).getByText(mockData[0].counterparty_name));
        expect(within(rows[2]).getByText(mockData[1].counterparty_name));
      });
    });
  });

  describe("Columns", () => {
    it("should render the default columns", async () => {
      renderComponent();

      const rows = screen.getAllByRole("row")[0];

      expect(within(rows).getAllByRole("cell")).toHaveLength(
        defaultColumns.length
      );
    });

    it("should render any number of columns", async () => {
      renderComponent([
        {
          label: "Test column",
          accessor: "counterparty_name",
          type: "text",
        },
        {
          label: "Another test column",
          accessor: "operation_type",
          type: "text",
        },
      ]);

      const headerRow = screen.getAllByRole("row")[0];
      const firstRow = screen.getAllByRole("row")[1];

      expect(within(headerRow).getAllByRole("cell")).toHaveLength(2);
      expect(within(headerRow).getByText("Test column")).toBeVisible();
      expect(within(headerRow).getByText("Another test column")).toBeVisible();
      expect(within(firstRow).getAllByRole("cell")).toHaveLength(2);
    });
  });
});
