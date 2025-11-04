import type { Education } from "../types/resume";
import type { Language } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import {
  GraduationCapIcon,
  CalendarIcon,
  MapPinIcon,
  LanguagesIcon,
  HeartIcon,
  CarFrontIcon,
} from "lucide-react";

interface AdditionalInfoProps {
  education: Education;
  languages: Language[];
  interests: string[];
  drivingLicense: string;
}

export default function AdditionalInfo({
  education,
  languages,
  interests,
  drivingLicense,
}: AdditionalInfoProps) {
  return (
    <section
      id="additional-info"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionTitle title="Additional Information" />
        </ScrollReveal>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            {/* Left Column - Education */}
            <ScrollReveal delay={100}>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCapIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {education.degree}
                    </h4>
                    <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                      {education.institution}
                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-3">
                      {education.field}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        {education.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4" />
                        {education.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Languages, Driving License & Interests */}
            <ScrollReveal delay={200}>
              <div className="p-8 space-y-8">
                {/* Languages */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <LanguagesIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Languages
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {languages.map((lang, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        <span>
                          {lang.language} -{" "}
                          <span className="text-gray-500 dark:text-gray-400">
                            {lang.proficiency}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Driving License */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <CarFrontIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Driving License
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {drivingLicense}
                  </p>
                </div>

                {/* Interests */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <HeartIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Interests
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-200 cursor-default"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
