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
      className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-800"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionTitle title="Additional Information" />
        </ScrollReveal>
        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
          <div className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-2 lg:divide-x lg:divide-y-0 dark:divide-gray-700">
            {/* Left Column - Education */}
            <ScrollReveal delay={100}>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <GraduationCapIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                      {education.degree}
                    </h4>
                    <p className="mb-2 text-lg font-medium text-indigo-600 dark:text-indigo-400">
                      {education.institution}
                    </p>
                    <p className="mb-3 text-base text-gray-700 dark:text-gray-300">
                      {education.field}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        {education.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4" />
                        {education.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Languages, Driving License & Interests */}
            <ScrollReveal delay={200}>
              <div className="space-y-8 p-8">
                {/* Languages */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <LanguagesIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
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
                        <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
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
                  <div className="mb-4 flex items-center gap-3">
                    <CarFrontIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
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
                  <div className="mb-4 flex items-center gap-3">
                    <HeartIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Interests
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <span
                        key={index}
                        className="cursor-default rounded-lg bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 transition-colors duration-200 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50"
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
