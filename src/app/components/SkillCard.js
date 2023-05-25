import React from "react"
import styles from "../styles/TechnicalSkillsSection.module.css"

const SkillCard = ({ iconComponent, title }) => {
  return (
    <div
      className={styles.card}
      data-aos="flip-left"
      data-aos-duration="1000"
    >
      {iconComponent}
      <p>{title}</p>
    </div>
  )
}

export default SkillCard
