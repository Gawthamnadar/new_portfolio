import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import HeroSection from "./components/HeroSection"
import TechnicalSkills from "./components/TechnicalSkillsSection"
import WorkExperienceSection from "./components/WorkExperienceSection"

export default function Home() {
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
