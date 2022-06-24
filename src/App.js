import "aos/dist/aos.css";
import "./styles/global.css";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/landing";
import LayoutAuth from "./layouts/auth";
import ItemsPage from "./pages/items";
import CartPage from "./pages/cart";
import DetailItemPage from "./pages/detailItem";
import CheckoutPage from "./pages/checkout";
import TransactionStatusPage from "./pages/transactionStatus";
import HistoryPage from "./pages/history";

function App() {
  return (
    <Routes>
      <Route path="/lectronic-shop" element={<LandingPage />} />
      <Route path="/login" element={<LayoutAuth login />} />
      <Route path="/register" element={<LayoutAuth />} />
      <Route path="/lectronic-shop/explore" element={<ItemsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/detail/:productId" element={<DetailItemPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/status" element={<TransactionStatusPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;
