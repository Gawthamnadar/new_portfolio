import Image from "next/image"
import React from "react"
import styles from "../styles/WorkExperienceSection.module.css"

const WorkExperienceSection = () => {
  return (
    <section
      className={styles.container}
      id="work-experience-section"
      data-aos="zoom-in-up"
    >
      <h1>Work Experience</h1>
      <div className={styles.companies}>
        <div
          className={styles.company}
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Image src={"/EY.jpg"} alt="ey_logo" width={200} height={200} />
          <div>
            <h2>Senior Technology Consultant at Ernst and Young LLP, Mumbai</h2>
            <text>March 2022 — Present</text>
            <br />
            <br />
            <p>Client : HSBC (Wholesale IT - Banking Sector)</p>
            <br />
            <p>
              Project : SmartServe - Global digital platform used for client
              outreach for wholesale clients across Global Banking.
            </p>
            <br />
            <p>
              Responsibilities : Improved and expanded project platforms using
              React.Js and Redux to develop rich user interface to provide more
              functionalities and enhanced user experience, did peer code
              reviews and improved overall test coverage. Ensure that UI works
              flawlessly on all browsers and devices supported, maintaining
              accessibility and browser compatibility.
            </p>
          </div>
        </div>
        <div
          className={styles.company}
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Image src={"/AQM.jpg"} alt="aqm_logo" width={200} height={200} />
          <div>
            <h2>Software Developer at AQM Technologies PVT LTD, Mumbai</h2>
            <text>May 2019 — February 2022</text>
            <br />
            <br />
            <p>Internal Projects : </p>
            <ul>
              <li>DMS (Document Management System)</li>
              <li>HRMS (Human Resources Management System)</li>
              <li>Online CV Maker</li>
            </ul>
            <br />
            <p>
              Responsibilities : Developed several CRUD Web Application from
              scratch based on MVC using technologies such as React.Js, Node.Js,
              Express.Js, MySQL Server, HTML, CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperienceSection
