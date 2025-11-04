import type { Education as EducationType } from "../types/resume";

interface EducationProps {
  education: EducationType;
}

export default function Education({ education }: EducationProps) {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Education
        </h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {education.degree}
          </h3>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            {education.institution}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            {education.field}
          </p>
          <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
            <span>{education.period}</span>
            <span>•</span>
            <span>{education.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
