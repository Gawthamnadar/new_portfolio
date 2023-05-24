import Image from "next/image"
import React from "react"
import styles from "../styles/AboutSection.module.css"

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.sections}>
        <div className={styles.leftSection}>
          <Image src={"/aboutMe.png"} alt="about" width={500} height={400} />
        </div>
        <div className={styles.rightSection}>
          <h2>Highest Education :</h2>
          <h4>
            Post Graduate Program in Software Engineering. (Java
            Specialization), NIIT
          </h4>
          <br />
          <p>
            Highly motivated and diligent software developer with 4+ years of
            expertise in a variety of development areas like back-end services,
            front-end services, database models. Expert in working in an agile
            work environment, using project tracking tools like Jira, and
            version controlling with Git. Scaling new heights of success and
            leaving a mark of excellence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
