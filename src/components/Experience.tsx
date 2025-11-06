import { MapPinIcon } from "lucide-react";

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
      className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-800"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <SectionTitle title="Experience" className="mb-12" />
        </ScrollReveal>
        <div>
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={index}
              delay={index * 100}
              className="border-l-4 border-indigo-500 pb-12 last:pb-0 dark:border-indigo-400"
            >
              <div className="group relative pl-8">
                <div className="absolute top-0 -left-3.5 h-6 w-6 rounded-full bg-indigo-500 ring-4 ring-gray-50 transition-transform duration-300 group-hover:scale-125 dark:bg-indigo-400 dark:ring-gray-800"></div>
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:border-indigo-200 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-800">
                  <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:text-right">
                      <p className="font-medium text-gray-600 dark:text-gray-400">
                        {exp.period}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-sm text-gray-500 sm:justify-end dark:text-gray-500">
                        <MapPinIcon className="h-4 w-4" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {exp.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="group/item flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="shrink-0 text-indigo-500 transition-transform duration-200 group-hover/item:scale-125 dark:text-indigo-400">
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
