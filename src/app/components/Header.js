import React from "react"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <h1>My Portfolio</h1>
      <ul>
        <li className={styles.activeLink}>Home</li>
        <li>About</li>
        <li>Technical Skills</li>
        <li>Work Experience</li>
        <li>Contacts</li>
      </ul>
    </header>
  )
}

export default Header
