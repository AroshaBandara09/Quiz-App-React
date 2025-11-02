import styles from "./QuizBox.module.css";

function QuizBox({ title, description, questionCount }) {
  return (
    <div className={styles.quizBox}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.logoImage}
            src="https://www.transparentpng.com/download/math/12lFHl-lac-math-classes.png"
            alt="mathImage"
          />
        </div>
        <div className={styles.detailsContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <span className={styles.questionCount}>
            {questionCount} {questionCount > 1 ? "Questions" : "Question"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default QuizBox;
