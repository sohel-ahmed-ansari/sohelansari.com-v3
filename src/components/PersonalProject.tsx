import { Gamepad2Icon } from "lucide-react";

import type { PersonalProject as PersonalProjectType } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import { GitHubIcon } from "./icons";

interface PlayGameButtonProps {
  href: string;
}

function PlayGameButton({ href }: PlayGameButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-[200%_100%] px-6 py-3 font-medium text-white shadow-md transition-all duration-500 hover:scale-110 hover:bg-position-[100%_0] hover:shadow-2xl hover:shadow-purple-500/50"
    >
      <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>
      <span className="relative z-10 flex items-center gap-2">
        <Gamepad2Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-360" />
        <span>Play Game</span>
      </span>
      <span className="absolute inset-0 rounded-lg border-2 border-transparent bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-50"></span>
    </a>
  );
}

interface PersonalProjectProps {
  project: PersonalProjectType;
}

export default function PersonalProject({ project }: PersonalProjectProps) {
  return (
    <section
      id="project"
      className="bg-white px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <SectionTitle title="Personal Project" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="rounded-lg border border-indigo-100 bg-linear-to-br from-indigo-50 to-purple-50 p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:border-indigo-900/30 dark:from-indigo-900/20 dark:to-purple-900/20">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {project.name}
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                <GitHubIcon />
                View on GitHub
              </a>
              <PlayGameButton href={project.links.play_link} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
