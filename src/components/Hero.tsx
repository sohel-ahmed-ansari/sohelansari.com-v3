import { useEffect, useRef } from "react";
import type { Contact, Name, Role } from "../types/resume";
import sohelImage from "../assets/sohel.jpg";

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
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="hidden sm:inline">{contact.email}</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{contact.location}</span>
          </div>
        </div>
        <div className="mt-12 animate-fade-in-up animation-delay-600">
          <a
            href="#about"
            className="inline-block text-white border-2 border-indigo-400 px-8 py-3 rounded-full hover:bg-indigo-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
