import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import { NavigationBar } from "./components/NavigationBar";
import PrivateRoute from "./components/PrivateRoute";
import { Footer } from "./components/Footer";
import AdminDashBoard from "./pages/AdminDashBoard";

function Main() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/admin-dashboard";
  return (
    <>
      {!hideNavAndFooter && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin-dashboard" element={<AdminDashBoard />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}
