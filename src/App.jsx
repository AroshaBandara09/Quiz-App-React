import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import QuizDashboard from "./pages/quiz-dashboard/QuizDashboard";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<QuizDashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
