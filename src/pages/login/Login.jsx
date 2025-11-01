import { useState } from "react";
import styles from "./Login.module.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <h2>Quiz Buddy</h2>

        <p className={styles.descriptionText}>
          Ready to challenge your mind? Sign in or create an account to start
          your quiz journey with Quiz Buddy!
        </p>

        <hr />

        <div className={styles.loginBar}>
          <span
            className={`${styles.tab} ${
              activeTab === "login" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("login")}
          >
            <FontAwesomeIcon icon={faUser} className={styles.fontIcon} />
            Login
          </span>
          <span
            className={`${styles.tab} ${
              activeTab === "register" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("register")}
          >
            <FontAwesomeIcon icon={faUserPlus} className={styles.fontIcon} />
            Register
          </span>
        </div>

        <div className={styles.formContainer}>
          {activeTab === "login" ? (
            <form className={styles.form}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">
                <FontAwesomeIcon icon={faSignIn} className={styles.fontIcon} />
                Login
              </button>
            </form>
          ) : (
            <form className={styles.form}>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="number" placeholder="Age" required />
              <button type="submit">
                <FontAwesomeIcon icon={faSignIn} className={styles.fontIcon} />
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
