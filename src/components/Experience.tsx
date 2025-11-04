import type { Experience as ExperienceType } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionTitle title="Experience" />
        </ScrollReveal>
        <div>
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={index}
              delay={index * 100}
              className="border-l-4 border-indigo-500 dark:border-indigo-400 pb-12 last:pb-0"
            >
              <div className="relative pl-8 group">
                <div className="absolute -left-3.5 top-0 w-6 h-6 bg-indigo-500 dark:bg-indigo-400 rounded-full group-hover:scale-125 transition-transform duration-300 ring-4 ring-gray-50 dark:ring-gray-800"></div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:text-right">
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {exp.period}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center sm:justify-end gap-1 mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-gray-700 dark:text-gray-300 flex items-start gap-3 group/item"
                      >
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 shrink-0 group-hover/item:scale-125 transition-transform duration-200">
                          →
                        </span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
