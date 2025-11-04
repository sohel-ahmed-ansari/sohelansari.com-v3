import type { Education as EducationType } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import { GraduationCapIcon, CalendarIcon, MapPinIcon } from "lucide-react";

interface EducationProps {
  education: EducationType;
}

export default function Education({ education }: EducationProps) {
  return (
    <section
      id="education"
      className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-800"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <SectionTitle title="Education" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-purple-500">
                <GraduationCapIcon className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
                <p className="mb-2 text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                  {education.institution}
                </p>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                  {education.field}
                </p>
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    {education.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4" />
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
