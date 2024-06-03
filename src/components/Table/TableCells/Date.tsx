import { Cell } from "../Cell/Cell";

export const DateCell = ({ data }: { data: string }) => {
  const date = new Date(data);
  const formatter = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedDate = formatter.format(date);

  return <Cell>{formattedDate}</Cell>;
};
