import "aos/dist/aos.css";
import "./styles/global.css";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/landing";
import LayoutAuth from "./layouts/auth";
import ItemsPage from "./pages/items";
import CartPage from "./pages/cart";
import DetailItemPage from "./pages/detailItem";

function App() {
  return (
    <Routes>
      <Route path="/lectronic-shop" element={<LandingPage />} />
      <Route path="/login" element={<LayoutAuth login />} />
      <Route path="/register" element={<LayoutAuth />} />
      <Route path="/lectronic-shop/explore" element={<ItemsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/detail/1" element={<DetailItemPage />} />
    </Routes>
  );
}

export default App;
