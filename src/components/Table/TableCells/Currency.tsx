import { Cell } from "../Cell/Cell";

export const CurrencyCell = ({ data }: { data: string }) => {
  return <Cell>{`${data}`}</Cell>;
};
