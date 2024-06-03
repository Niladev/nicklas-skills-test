import { Cell } from "../Cell/Cell";

export const DateCell = ({ data }: { data: string }) => {
  const date = new Date(data);
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const formattedDate = formatter.format(date);

  return <Cell>{formattedDate}</Cell>;
};
