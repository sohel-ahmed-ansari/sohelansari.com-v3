import type { Education as EducationType } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import { GraduationCapIcon, CalendarIcon, LocationIcon } from "./icons";

interface EducationProps {
  education: EducationType;
}

export default function Education({ education }: EducationProps) {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionTitle title="Education" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center shrink-0">
                <GraduationCapIcon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {education.degree}
                </h3>
                <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                  {education.institution}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {education.field}
                </p>
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-2">
                    <CalendarIcon />
                    {education.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <LocationIcon className="w-4 h-4" />
                    {education.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
