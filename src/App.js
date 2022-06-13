import "./styles/global.css";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/landing";

function App() {
  return (
    <Routes>
      <Route path="/lectronic-shop" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
