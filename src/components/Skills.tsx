interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm sm:text-base font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
