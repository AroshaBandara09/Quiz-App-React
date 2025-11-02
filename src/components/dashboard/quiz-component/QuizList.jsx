import { useEffect, useState } from "react";
import QuizComponent from "./QuizBox";
import styles from "./QuizBox.module.css";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/quizzes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch quizzes!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setQuizzes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div className={styles.quizListContainer}>Loading quizzes...</div>;
  }
  return (
    <div className={styles.quizListContainer}>
      {quizzes.map((quiz) => (
        <QuizComponent
          key={quiz.id}
          title={quiz.name}
          description={quiz.description}
          questionCount={quiz.questionCount}
        />
      ))}
    </div>
  );
}

export default QuizList;
