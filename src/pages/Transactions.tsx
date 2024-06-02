import { useParams } from "react-router-dom";

export const Transactions = () => {
  const { transactionId } = useParams();
  return <div>{transactionId || "No id"}</div>;
};
