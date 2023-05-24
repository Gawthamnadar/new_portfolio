import Image from "next/image"
import React from "react"
import styles from "../styles/HeroSection.module.css"

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <h2>Hello, It's Me</h2>
        <h1>Gawtham Nadar</h1>
        <h2>A Senior Full-Stack Software Developer</h2>
        <br />
        <i>
          “Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.”
        </i>
        <br />
        <button>Download My CV</button>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.profileContainer}>
          <Image
            src="/MyImage.png"
            alt="Gawtham Image"
            width={500}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
