import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./components/dashboard/nav-bar/Navbar";

import QuizForm from "./components/quiz-form/QuizForm";
import QuizCard from "./components/quiz-card/QuizCard";
import QuestionCard from "./components/question-card/QuestionCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar /> {/* The Navbar will be rendered on every page under /dashboard */}
              <Dashboard />
            </>
          }
        />
        
        <Route path="/QuizForm" element={<QuizForm />} />
        <Route path="/QuizCard" element={<QuizCard />} />
        <Route path="/QuestionCard" element={<QuestionCard />} />
        
      </Routes>
    </>
  );
}

export default App;
