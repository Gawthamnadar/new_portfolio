import React from "react"
import styles from "../styles/ContactSection.module.css"

const ContactSection = () => {
  return (
    <section className={styles.container} id="contact-section">
      <h1>Get In Touch</h1>
      <form data-aos="fade-up">
        <div>
          <label htmlFor="name">Name</label>
          <input type={"text"} name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email Id</label>
          <input type={"email"} name="email" id="email" />
        </div>
        <div>
          <label htmlFor="mobileNo">Mobile No.</label>
          <input type={"text"} name="mobileNo" id="mobileNo" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />
        </div>
        <div>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactSection
