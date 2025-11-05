import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./QuestionList.module.css";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

function NewQuestion() {
  return (
    <div className={styles.quizBox}>
      <div className={styles.newQuestionBox}>
        <button className={styles.addButton}>
          <FontAwesomeIcon icon={faAdd} color={"#e0e0e0"} />
        </button>
      </div>
    </div>
  );
}

export default NewQuestion;
