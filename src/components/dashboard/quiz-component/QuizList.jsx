import QuizComponent from "./QuizBox";
import styles from "./QuizBox.module.css";

function QuizList() {
  return (
    <div className={styles.quizListContainer}>
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
      <QuizComponent
        title="Science Quiz"
        description="Test your knowledge of physics"
      />
      <QuizComponent title="History Quiz" description="World history trivia" />
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
      <QuizComponent
        title="Science Quiz"
        description="Test your knowledge of physics"
      />
      <QuizComponent title="History Quiz" description="World history trivia" />
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
      <QuizComponent title="History Quiz" description="World history trivia" />
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
      <QuizComponent
        title="Science Quiz"
        description="Test your knowledge of physics"
      />
      <QuizComponent title="History Quiz" description="World history trivia" />
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
      <QuizComponent title="History Quiz" description="World history trivia" />
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
      <QuizComponent title="History Quiz" description="World history trivia" />
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
      <QuizComponent
        title="Science Quiz"
        description="Test your knowledge of physics"
      />
      <QuizComponent title="History Quiz" description="World history trivia" />
      <QuizComponent title="Math Quiz" description="10 questions on algebra" />
    </div>
  );
}

export default QuizList;
