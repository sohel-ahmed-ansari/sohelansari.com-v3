import type { Contact } from "../types/resume";
import type { Language } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  LanguageIcon,
  ShieldIcon,
  HeartIcon,
} from "./icons";

interface FooterProps {
  contact: Contact;
  languages: Language[];
  interests: string[];
  drivingLicense: string;
}

export default function Footer({
  contact,
  languages,
  interests,
  drivingLicense,
}: FooterProps) {
  return (
    <footer
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionTitle title="Get In Touch" variant="footer" />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal delay={100}>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center gap-2">
                <LanguageIcon />
                Languages
              </h3>
              <ul className="space-y-2">
                {languages.map((lang, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    {lang.language} - {lang.proficiency}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-400 flex items-center gap-2">
                <ShieldIcon />
                {drivingLicense}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center gap-2">
                <HeartIcon />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-indigo-600 rounded-full text-sm hover:bg-indigo-500 transition-colors duration-200 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
