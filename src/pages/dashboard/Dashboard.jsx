// import styles from "./Dashboard.module.css";
import QuizComponent from "../../components/dashboard/quiz-component/QuizList.jsx";
import QuestionList from "../../components/dashboard/question-component/QuestionList.jsx";

function Dashboard() {
  return (
    <div>
      <QuestionList />
      <QuizComponent />
    </div>
  );
}

export default Dashboard;
