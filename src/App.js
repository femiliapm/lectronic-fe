import "aos/dist/aos.css";
import "./styles/global.css";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/landing";
import LayoutAuth from "./layouts/auth";
import ItemsPage from "./pages/items";

function App() {
  return (
    <Routes>
      <Route path="/lectronic-shop" element={<LandingPage />} />
      <Route path="/login" element={<LayoutAuth login />} />
      <Route path="/register" element={<LayoutAuth />} />
      <Route path="/lectronic-shop/explore" element={<ItemsPage />} />
    </Routes>
  );
}

export default App;
