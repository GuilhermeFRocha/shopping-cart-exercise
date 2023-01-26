import "./styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContextProvider } from "./Context";
import { PurchaseConfirmation } from "./pages/PurchaseConfirmation";
import { CartPage } from "./pages/Cart";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/purchase-confirmation"
            element={<PurchaseConfirmation />}
          />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;