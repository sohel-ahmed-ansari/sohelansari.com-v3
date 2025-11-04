import { useEffect, useRef } from "react";
import type { Contact, Name, Role } from "../types/resume";
import sohelImage from "../assets/sohel.jpg";
import {
  EmailIcon,
  LinkedInIcon,
  LocationIcon,
  ChevronDownIcon,
} from "./icons";

interface HeroProps {
  name: Name;
  role: Role;
  contact: Contact;
}

export default function Hero({ name, role, contact }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
        heroRef.current.style.opacity = `${1 - scrolled / 600}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-indigo-900 to-purple-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div
        ref={heroRef}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        {/* Profile Picture */}
        <div className="mb-8 animate-fade-in-up">
          <img
            src={sohelImage}
            alt={`${name.first} ${name.last}`}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full border-4 border-indigo-400 shadow-2xl object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-2 animate-fade-in-up animation-delay-200">
          <span>{name.first}</span>{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
            {name.last}
          </span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-indigo-300 mb-2 animate-fade-in-up animation-delay-300">
          {role.title}
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 animate-fade-in-up animation-delay-400">
          {role.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-300 animate-fade-in-up animation-delay-500">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 hover:text-indigo-400 transition-colors duration-300"
          >
            <EmailIcon />
            <span className="hidden sm:inline">{contact.email}</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400 transition-colors duration-300"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <div className="flex items-center gap-2">
            <LocationIcon />
            <span>{contact.location}</span>
          </div>
        </div>
        <div className="mt-12 animate-fade-in-up animation-delay-600">
          <a
            href="#about"
            className="inline-block text-white border-2 border-indigo-400 px-8 py-3 rounded-full hover:bg-indigo-400 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}
