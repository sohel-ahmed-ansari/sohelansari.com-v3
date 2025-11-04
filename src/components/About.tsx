import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

interface AboutProps {
  summary: string;
}

export default function About({ summary }: AboutProps) {
  return (
    <section
      id="about"
      className="bg-white px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <SectionTitle title="About Me" className="mb-6" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-center text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {summary}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
