import type { Experience as ExperienceType } from "../types/resume";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-4 border-blue-500 dark:border-blue-400 pb-8 last:pb-0 group"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0 text-right">
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {exp.period}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
