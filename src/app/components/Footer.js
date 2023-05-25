import styles from "@/app/styles/Footer.module.css"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"
import Link from "next/link"

export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
}

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles["logo-details"]}>
            <span className={styles.logo_name}>Gawtham Nadar</span>
          </div>
          <div className={styles[`media-icons`]}>
            <Link
              data-aos="zoom-in"
              href="https://www.facebook.com/gawtham.nadar/"
              target={"_blank"}
            >
              <i>
                <FaFacebookF />
              </i>
            </Link>
            <Link
              data-aos="zoom-in"
              href="https://twitter.com/Gawtham_94"
              target={"_blank"}
            >
              <i>
                <FaTwitter />
              </i>
            </Link>
            <Link
              data-aos="zoom-in"
              href="https://www.instagram.com/aura_geek/"
              target="_blank"
            >
              <i>
                <FaInstagram />
              </i>
            </Link>
            <Link
              data-aos="zoom-in"
              href="https://www.linkedin.com/in/gawtham-r-772771145/"
              target={"_blank"}
            >
              <i>
                <FaLinkedinIn />
              </i>
            </Link>
          </div>
        </div>
        <div className={styles["bottom-details"]}>
          <div className={styles.bottom_text}>
            <span className={styles.copyright_text}>
              Copyright © 2023
              <Link href="/>"> Gawtham Nadar.</Link> All rights reserved
            </span>
            <span className={styles.policy_terms}>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
