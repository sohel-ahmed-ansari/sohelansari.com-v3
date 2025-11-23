import { motion, useScroll, useTransform } from "framer-motion";
import {
  MailIcon,
  MapPinIcon,
  ChevronDownIcon,
  BriefcaseIcon,
} from "lucide-react";

import type { Contact, Name, Role } from "../types/resume";
import ParticleBackground from "./ParticleBackground";
import { LinkedInIcon } from "./icons";

interface HeroProps {
  name: Name;
  role: Role;
  contact: Contact;
  availableForHiring: boolean;
}

export default function Hero({
  name,
  role,
  contact,
  availableForHiring,
}: HeroProps) {
  // Parallax effect: Track scroll position
  const { scrollY } = useScroll();

  // Transform scroll position (0-600px) to vertical offset (0-300px)
  // Creates upward movement as user scrolls down
  const y = useTransform(scrollY, [0, 600], [0, 300]);

  // Transform scroll position (0-600px) to opacity (1-0)
  // Creates fade-out effect as user scrolls down
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="group relative flex min-h-dvh items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-indigo-900 to-purple-900"
    >
      <ParticleBackground />

      {/* Apply parallax transforms: content moves up and fades out on scroll */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <div className="animate-[fade-in-up_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.2s_forwards] space-y-4 opacity-0">
          {/* Profile Picture */}
          <div
            className="animate-fade-in-up mb-4"
            style={{ animationDelay: "0.35s" }}
          >
            <div className="mx-auto inline-block transition-transform duration-300 hover:scale-105 hover:rotate-2">
              <img
                src="/sohel.jpg"
                alt={`${name.first} ${name.last}`}
                className="animate-scale-in mx-auto h-32 w-32 rounded-full border-4 border-indigo-400 object-cover shadow-2xl sm:h-40 sm:w-40 md:h-48 md:w-48"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>

          {availableForHiring && (
            <div
              className="animate-fade-in-up mb-4 flex items-center justify-center"
              style={{ animationDelay: "0.5s" }}
            >
              <button
                onClick={handleScrollToContact}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-green-400/50 bg-green-500/20 px-4 py-2 text-xs font-semibold text-green-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] active:scale-95"
              >
                <div className="animate-pulse">
                  <BriefcaseIcon className="h-4 w-4" />
                </div>
                <span>Available for Hiring</span>
              </button>
            </div>
          )}

          <h1
            className="animate-fade-in-up mb-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            style={{ animationDelay: "0.65s" }}
          >
            <span
              className="animate-slide-in-left inline-block"
              style={{ animationDelay: "0.8s" }}
            >
              {name.first}
            </span>{" "}
            <span
              className="animate-slide-in-right inline-block bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              style={{ animationDelay: "0.9s" }}
            >
              {name.last}
            </span>
          </h1>

          <p
            className="animate-fade-in-up mb-2 text-xl text-indigo-300 md:text-2xl lg:text-3xl"
            style={{ animationDelay: "1.05s" }}
          >
            {role.title}
          </p>

          <p
            className="animate-fade-in-up mb-8 text-sm text-gray-400 sm:text-base md:text-lg"
            style={{ animationDelay: "1.2s" }}
          >
            {role.subtitle}
          </p>

          <div
            className="animate-fade-in-up flex flex-wrap justify-center gap-4 text-gray-300 sm:gap-6"
            style={{ animationDelay: "1.35s" }}
          >
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-indigo-400"
            >
              <MailIcon className="h-5 w-5" />
              <span className="hidden sm:inline">{contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-indigo-400"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-110">
              <MapPinIcon className="h-5 w-5" />
              <span>{contact.location}</span>
            </div>
          </div>

          <div
            className="animate-fade-in-up mt-12"
            style={{ animationDelay: "1.5s" }}
          >
            <a
              href="#about"
              className="inline-block rounded-full border-2 border-indigo-400 px-8 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-400 hover:text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95"
            >
              About Me
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ChevronDownIcon className="h-6 w-6 text-white" />
        </a>
      </div>
    </section>
  );
}
