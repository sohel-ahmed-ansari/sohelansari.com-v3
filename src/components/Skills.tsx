import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionTitle title="Skills & Technologies" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-slate-700 text-white rounded-full text-sm sm:text-base font-medium hover:scale-110 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-500/50 transition-all duration-300 cursor-default"
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
