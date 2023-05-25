"use client"

import { useEffect } from "react"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import HeroSection from "./components/HeroSection"
import TechnicalSkills from "./components/TechnicalSkillsSection"
import WorkExperienceSection from "./components/WorkExperienceSection"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    document
      .querySelector(`header ul li a[href="#hero-section"]`)
      .classList.add("active")
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll("header ul li a")
    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        let id = sec.getAttribute("id")
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active")
            document
              .querySelector(`header ul li a[href="#${id}"]`)
              .classList.add("active")
          })
        }
      })
    }
  }, [])

  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechnicalSkills />
      <WorkExperienceSection />
      <ContactSection />
    </>
  )
}
