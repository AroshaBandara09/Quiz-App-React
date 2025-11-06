import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./components/dashboard/nav-bar/Navbar";
import YourQuiz from "./components/dashboard/your-quiz-component/your-quiz";
import QuizForm from "./components/quiz-form/quiz-form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/your-quiz" element={<YourQuiz />} />
        <Route path="/quiz-form" element={<QuizForm />} />
      </Routes>
    </>
  );
}

export default App;
