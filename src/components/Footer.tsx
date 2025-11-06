import { MailIcon, PhoneIcon, MapPinIcon, DownloadIcon } from "lucide-react";

import type { Contact } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import { LinkedInIcon, StackOverflowIcon } from "./icons";

interface FooterProps {
  contact: Contact;
  stackOverflowUrl?: string;
}

export default function Footer({ contact, stackOverflowUrl }: FooterProps) {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sohel_Frontend_Engineer_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer
      id="contact"
      className="bg-gray-900 px-4 pt-10 pb-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionTitle title="Get In Touch" variant="footer" />
        </ScrollReveal>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal delay={100}>
            <div className="flex h-full flex-col">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-indigo-400">
                <MailIcon className="h-5 w-5" />
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-center gap-2 transition-colors duration-300 hover:text-indigo-400"
                  >
                    <span className="transition-transform group-hover:scale-110">
                      <MailIcon className="h-5 w-5" />
                    </span>
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="group flex items-center gap-2 transition-colors duration-300 hover:text-indigo-400"
                  >
                    <span className="transition-transform group-hover:scale-110">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5" />
                  {contact.location}
                </li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex h-full flex-col">
              <h3 className="mb-4 text-xl font-semibold text-indigo-400">
                Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 transition-colors duration-300 hover:text-indigo-400"
                  >
                    <span className="transition-transform group-hover:scale-110">
                      <LinkedInIcon />
                    </span>
                    LinkedIn
                  </a>
                </li>
                {stackOverflowUrl && (
                  <li>
                    <a
                      href={stackOverflowUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 transition-colors duration-300 hover:text-indigo-400"
                    >
                      <span className="transition-transform group-hover:scale-110">
                        <StackOverflowIcon />
                      </span>
                      Stack Overflow
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex h-full flex-col">
              <h3 className="mb-4 text-xl font-semibold text-indigo-400">
                Resume
              </h3>
              <button
                onClick={handleDownloadResume}
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50"
              >
                <DownloadIcon className="h-5 w-5" />
                Download Resume
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
