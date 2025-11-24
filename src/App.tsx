import { useEffect } from "react";

import About from "./components/About";
import Achievements from "./components/Achievements";
import AdditionalInfo from "./components/AdditionalInfo";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import PersonalProject from "./components/PersonalProject";
import Recommendations from "./components/Recommendations";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import resumeData from "./data/resume.json";
import type { ResumeData } from "./types/resume";

const resume = resumeData as ResumeData;

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero
        name={resume.name}
        role={resume.role}
        contact={resume.contact}
        availableForHiring={resume.availableForHiring}
      />
      <About summary={resume.summary} />
      <Experience experiences={resume.experience} />
      <Skills skills={resume.skills} />
      <Achievements achievements={resume.key_achievements} />
      {resume.linkedin_recommendations && (
        <Recommendations recommendations={resume.linkedin_recommendations} />
      )}
      <PersonalProject project={resume.personal_project} />
      <AdditionalInfo
        education={resume.education}
        languages={resume.languages}
        interests={resume.interests}
        drivingLicense={resume.driving_license}
      />
      <Footer
        contact={resume.contact}
        stackOverflowUrl={resume.stackOverflowUrl}
      />
      <ThemeToggle />
    </div>
  );
}

export default App;
