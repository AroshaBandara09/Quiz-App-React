import styles from "./QuestionList.module.css";
import { useEffect, useState } from "react";
import QuestionBox from "./QuestionBox";
import NewQuestion from "./NewQuestion";

function QuestionList() {
  const [questions, setQuestionLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/question-lists")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch quizzes!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setQuestionLists(data);
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
      <NewQuestion />
      {questions.map((quiz) => (
        <QuestionBox
          key={quiz.id}
          title={quiz.name}
          description={quiz.description}
          questionCount={quiz.questionCount}
        />
      ))}
    </div>
  );
}

export default QuestionList;
