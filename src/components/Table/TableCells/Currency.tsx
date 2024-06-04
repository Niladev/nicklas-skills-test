import { Cell } from "../Cell/Cell";

export const CurrencyCell = ({
  data,
  currency,
}: {
  data: string;
  currency: string;
}) => {
  return (
    <Cell>{`${currency.toUpperCase()} ${
      Number(data) > 0 ? "+" : ""
    }${data}`}</Cell>
  );
};
