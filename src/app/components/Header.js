import Link from "next/link"
import React from "react"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <h1>My Portfolio</h1>
      <ul>
        <li>
          <Link href={"#hero-section"}>Home</Link>
        </li>
        <li>
          <Link href={"#about-section"}>About</Link>
        </li>
        <li>
          <Link href={"#technical-skills-section"}>Technical Skills</Link>
        </li>
        <li>
          <Link href={"#work-experience-section"}>Work Experience</Link>
        </li>
        <li>
          <Link href={"#contact-section"}>Contacts</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
