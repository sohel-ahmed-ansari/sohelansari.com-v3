import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  ChevronDownIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";

import { useParallax } from "../hooks/useParallax";
import type { Contact, Name, Role } from "../types/resume";
import ParticleBackground from "./ParticleBackground";
import TypewriterText from "./TypewriterText";
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
  const { y, opacity } = useParallax({ offset: 300 });

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="group relative flex min-h-dvh items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900 dark:bg-gray-900 dark:bg-none"
    >
      <ParticleBackground className="absolute inset-0 z-0 h-full w-full" />
      <FogEffect className="z-5 dark:block" />
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
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-green-400/50 bg-green-500/20 px-4 py-2 text-xs font-semibold text-green-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] active:scale-95 dark:border-green-500/50 dark:bg-green-600/20 dark:text-green-200"
                aria-label="Scroll to contact section for hiring"
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

          <p className="mb-8 min-h-6 text-sm text-gray-400 sm:text-base md:min-h-7 md:text-lg">
            <TypewriterText text={role.subtitle} delay={1.2} loop={true} />
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
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDownIcon className="h-6 w-6 text-white" />
        </a>
      </div>
    </section>
  );
}

const FogEffect = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <motion.div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          animate={{
            x: ["-50vw", "105vw"],
            rotate: [0, 180],
            opacity: [0, 0.3, 0.3, 0.3, 0.3, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
            rotate: {
              duration: 40,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
            opacity: {
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
            scale: {
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <motion.div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          animate={{
            x: ["50vw", "-105vw"],
            rotate: [0, -180],
            opacity: [0, 0.3, 0.3, 0.3, 0.3, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
            rotate: {
              duration: 45,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
            opacity: {
              duration: 35,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
            scale: {
              duration: 35,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
  );
};
