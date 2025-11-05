import { useState } from "react";
import styles from "./Navbar.module.css"; // Assuming CSS is in Navbar.module.css

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Company Name */}
        <div className={styles.companyName}>
          <h1>Quizee Quiz</h1>
        </div>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchBar}
          />
        </div>

        {/* Profile & Log Out */}
        <div className={styles.profileContainer}>
          <div className={styles.profile}>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className={styles.profileImg}
            />
            <span className={styles.profileName}>Arosha B</span>
          </div>
          <button className={styles.logoutButton}>Log Out</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
