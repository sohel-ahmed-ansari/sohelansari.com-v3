interface AboutProps {
  summary: string;
}

export default function About({ summary }: AboutProps) {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}
