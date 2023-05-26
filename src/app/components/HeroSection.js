import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import styles from "../styles/HeroSection.module.css"

const HeroSection = () => {
  return (
    <section className={styles.container} id="hero-section">
      <div className={styles.leftSection}>
        <h2 data-aos="zoom-right">Hello, It's Me</h2>
        <h1 data-aos="zoom-right">Gawtham Nadar</h1>
        <h2 data-aos="zoom-right">A Senior Full-Stack Software Developer</h2>
        <br />
        <i data-aos="zoom-right">
          “Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.”
        </i>
        <br />
        <a href="/CV.pdf" target={"_blank"} data-aos="zoom-right">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            View My CV in PDF
          </motion.button>
        </a>
        <a href="/CV.docx" download data-aos="zoom-right">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Download My CV in Docx
          </motion.button>
        </a>
      </div>
      <div className={styles.rightSection} data-aos="zoom-in">
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
