import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const Transactions = () => {
  const { transactionId } = useParams();
  return (
    <div>
      <Header title={"History"} />
      {transactionId || "No id"}
    </div>
  );
};
