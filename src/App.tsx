import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Transactions } from "./pages/Transactions";
import { Cards } from "./pages/Cards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions/:transactionId?" element={<Transactions />} />
      <Route path="/cards" element={<Cards />} />
    </Routes>
  );
}

export default App;
