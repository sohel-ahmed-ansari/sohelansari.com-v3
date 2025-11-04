import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

interface AboutProps {
  summary: string;
}

export default function About({ summary }: AboutProps) {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionTitle title="About Me" className="mb-6" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              {summary}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
