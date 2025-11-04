import type { Contact } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  LinkedInIcon,
  StackOverflowIcon,
  DownloadIcon,
} from "./icons";

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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionTitle title="Get In Touch" variant="footer" />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          <ScrollReveal delay={100}>
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center gap-2">
                <EmailIcon />
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      <EmailIcon />
                    </span>
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      <PhoneIcon />
                    </span>
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <LocationIcon />
                  {contact.location}
                </li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
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
                      className="hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="group-hover:scale-110 transition-transform">
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
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                Resume
              </h3>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg hover:shadow-indigo-500/50 w-fit"
              >
                <DownloadIcon />
                Download Resume
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
