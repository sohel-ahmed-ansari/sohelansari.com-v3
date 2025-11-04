import { useEffect, useRef } from "react";
import type { Contact, Name, Role } from "../types/resume";
import sohelImage from "../assets/sohel.jpg";
import { MailIcon, MapPinIcon, ChevronDownIcon } from "lucide-react";
import { LinkedInIcon } from "./icons";

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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-indigo-900 to-purple-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute top-20 left-10 h-72 w-72 rounded-full bg-indigo-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute top-40 right-10 h-72 w-72 rounded-full bg-violet-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-1/2 h-72 w-72 rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div
        ref={heroRef}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        {/* Profile Picture */}
        <div className="animate-fade-in-up mb-8">
          <img
            src={sohelImage}
            alt={`${name.first} ${name.last}`}
            className="mx-auto h-32 w-32 rounded-full border-4 border-indigo-400 object-cover shadow-2xl sm:h-40 sm:w-40 md:h-48 md:w-48"
          />
        </div>

        <h1 className="animate-fade-in-up animation-delay-200 mb-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          <span>{name.first}</span>{" "}
          <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {name.last}
          </span>
        </h1>
        <p className="animate-fade-in-up animation-delay-300 mb-2 text-xl text-indigo-300 md:text-2xl lg:text-3xl">
          {role.title}
        </p>
        <p className="animate-fade-in-up animation-delay-400 mb-8 text-sm text-gray-400 sm:text-base md:text-lg">
          {role.subtitle}
        </p>
        <div className="animate-fade-in-up animation-delay-500 flex flex-wrap justify-center gap-4 text-gray-300 sm:gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 transition-colors duration-300 hover:text-indigo-400"
          >
            <MailIcon className="h-5 w-5" />
            <span className="hidden sm:inline">{contact.email}</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-indigo-400"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            <span>{contact.location}</span>
          </div>
        </div>
        <div className="animate-fade-in-up animation-delay-600 mt-12">
          <a
            href="#about"
            className="inline-block transform rounded-full border-2 border-indigo-400 px-8 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-400 hover:text-white hover:shadow-indigo-500/50"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <ChevronDownIcon className="h-6 w-6 text-white" />
      </div>
    </section>
  );
}
