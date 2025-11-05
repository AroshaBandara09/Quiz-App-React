import styles from "./QuestionList.module.css";

function QuestionBox({ topic, name }) {
  return (
    <div className={styles.quizBox}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.logoImage}
            src="https://www.transparentpng.com/download/math/12lFHl-lac-math-classes.png"
            alt="quiz topic"
          />
        </div>
        <div className={styles.detailsContainer}>
          <h2 className={styles.title}>{name}</h2>
          <span className={styles.questionCount}>{topic}</span>
        </div>
      </div>
    </div>
  );
}

export default QuestionBox;
