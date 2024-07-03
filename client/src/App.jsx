import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import { NavigationBar } from "./components/NavigationBar";
import PrivateRoute from "./components/PrivateRoute";
import { Footer } from "./components/Footer";
import AdminDashBoard from "./pages/AdminDashBoard";

export default function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin-dashboard" element={<AdminDashBoard />}></Route>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
