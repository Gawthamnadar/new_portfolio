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
import SkillCard from "./SkillCard"

const TechnicalSkills = () => {
  return (
    <section className={styles.container} id="technical-skills-section">
      <h1>Technical Skills</h1>
      <div className={styles.cardContainer}>
        <SkillCard iconComponent={<FaReact />} title={"React.Js"} />
        <SkillCard iconComponent={<SiNextdotjs />} title={"Next.Js"} />
        <SkillCard iconComponent={<FaJs />} title={"JavaScript"} />
        <SkillCard iconComponent={<FaNodeJs />} title={"Node.Js"} />
        <SkillCard iconComponent={<FaAngular />} title={"Angular"} />
        <SkillCard iconComponent={<FaJava />} title={"Java"} />
        <SkillCard iconComponent={<FaCss3 />} title={"CSS3"} />
        <SkillCard iconComponent={<FaHtml5 />} title={"HTML5"} />
        <SkillCard iconComponent={<SiJira />} title={"JIRA"} />
        <SkillCard iconComponent={<FaGithub />} title={"GitHub"} />
      </div>
    </section>
  )
}

export default TechnicalSkills
