import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./components/dashboard/nav-bar/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
