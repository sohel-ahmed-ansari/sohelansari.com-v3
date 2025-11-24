import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="bg-white px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionTitle title="Skills & Technologies" className="mb-12" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded-full bg-slate-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-110 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-500/50 sm:text-base dark:bg-slate-600 dark:hover:bg-slate-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
