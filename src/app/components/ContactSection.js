import axios from "axios"
import React, { useState } from "react"
import styles from "../styles/ContactSection.module.css"
const initialState = {
  name: "",
  email: "",
  mobileNo: "",
  message: "",
}
const ContactSection = () => {
  const [formData, setFormData] = useState(initialState)
  const [disabled, setDisabled] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)
  const [successMsg, setSuccessMsg] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setDisabled(true)
    const data = {
      Name: formData.name,
      Email: formData.email,
      Mobile: formData.mobileNo,
      Message: formData.message,
    }
    axios
      .post(
        "https://sheet.best/api/sheets/4f67b069-7c5e-417d-86b0-65a53dcf5704",
        data
      )
      .then((response) => {
        setFormData(initialState)
        setDisabled(false)
        setErrorMsg(false)
        setSuccessMsg(true)
        setTimeout(() => {
          setSuccessMsg(false)
        }, 3000)
      })
      .catch((err) => {
        setErrorMsg(true)
        setSuccessMsg(false)
        setDisabled(false)
        setTimeout(() => {
          setErrorMsg(false)
        }, 3000)
      })
  }
  return (
    <section className={styles.container} id="contact-section">
      <h1>Get In Touch</h1>
      <form data-aos="fade-up" autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            name="name"
            id="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Id</label>
          <input
            type={"email"}
            name="email"
            id="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobileNo">Mobile No.</label>
          <input
            type={"text"}
            name="mobileNo"
            id="mobileNo"
            value={formData.mobileNo}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            required
            onChange={handleChange}
          />
        </div>
        {successMsg && (
          <p style={{ color: "green" }}>Message sent successfully :)</p>
        )}
        {errorMsg && <p style={{ color: "red" }}>Something went wrong :(</p>}
        <div>
          <button type="submit" disabled={disabled}>
            Send Message
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactSection
