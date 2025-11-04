import type { PersonalProject as PersonalProjectType } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import { Gamepad2Icon } from "lucide-react";
import { GitHubIcon } from "./icons";

interface PersonalProjectProps {
  project: PersonalProjectType;
}

export default function PersonalProject({ project }: PersonalProjectProps) {
  return (
    <section
      id="project"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionTitle title="Personal Project" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-indigo-100 dark:border-indigo-900/30">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {project.name}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg"
              >
                <GitHubIcon />
                View on GitHub
              </a>
              <a
                href={project.links.play_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg hover:shadow-indigo-500/50"
              >
                <Gamepad2Icon className="w-5 h-5" />
                Play Game
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
