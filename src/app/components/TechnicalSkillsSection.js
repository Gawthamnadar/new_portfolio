import React from "react"
import styles from "../styles/TechnicalSkillsSection.module.css"
import {
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaJs,
  FaGithub,
  FaAngular,
  FaJava,
} from "react-icons/fa"
import { SiJira, SiNextdotjs } from "react-icons/si"

const TechnicalSkills = () => {
  return (
    <section className={styles.container}>
      <h1>Technical Skills</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaReact />
          <p>React.Js</p>
        </div>
        <div className={styles.card}>
          <SiNextdotjs />
          <p>Next.Js</p>
        </div>
        <div className={styles.card}>
          <FaJs />
          <p>JavaScript</p>
        </div>
        <div className={styles.card}>
          <FaNodeJs />
          <p>Node.Js</p>
        </div>
        <div className={styles.card}>
          <FaAngular />
          <p>Angular</p>
        </div>
        <div className={styles.card}>
          <FaJava />
          <p>Java</p>
        </div>
        <div className={styles.card}>
          <FaCss3 />
          <p>CSS3</p>
        </div>
        <div className={styles.card}>
          <FaHtml5 />
          <p>HTML5</p>
        </div>
        <div className={styles.card}>
          <SiJira />
          <p>JIRA</p>
        </div>
        <div className={styles.card}>
          <FaGithub />
          <p>GitHub</p>
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
