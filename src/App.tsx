import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Transactions } from "./pages/Transactions";
import { Cards } from "./pages/Cards";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/transactions/:transactionId?"
          element={<Transactions />}
        />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Layout>
  );
}

export default App;
