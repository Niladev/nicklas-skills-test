import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Transactions } from "./pages/Transactions/Transactions";

import { Layout } from "./components/Layout/Layout";
import { Cards } from "./pages/Cards/Cards";

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
