import useEmblaCarousel from "embla-carousel-react";
import { QuoteIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import type { LinkedInRecommendations } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

interface RecommendationsProps {
  recommendations: LinkedInRecommendations;
}

export default function Recommendations({
  recommendations,
}: RecommendationsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Track selected index
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial index

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (!emblaApi) return;

    let autoplayInterval: ReturnType<typeof setInterval>;
    let isPaused = false;

    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        if (!isPaused) {
          emblaApi.scrollNext();
        }
      }, 5000); // Change slide every 5 seconds
    };

    const container = emblaApi.containerNode();
    const pauseAutoplay = () => {
      isPaused = true;
    };
    const resumeAutoplay = () => {
      isPaused = false;
    };

    startAutoplay();
    container.addEventListener("mouseenter", pauseAutoplay);
    container.addEventListener("mouseleave", resumeAutoplay);

    return () => {
      clearInterval(autoplayInterval);
      container.removeEventListener("mouseenter", pauseAutoplay);
      container.removeEventListener("mouseleave", resumeAutoplay);
    };
  }, [emblaApi]);

  if (!recommendations?.recommendations?.length) {
    return null;
  }

  return (
    <section
      id="recommendations"
      className="bg-gray-50 px-4 pt-24 pb-12 sm:px-6 lg:px-8 dark:bg-gray-800"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionTitle title="Recommendations" className="mb-12" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            <div className="overflow-hidden py-4" ref={emblaRef}>
              <div className="flex gap-6 px-6">
                {recommendations.recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="min-w-0 shrink-0 basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
                  >
                    <div className="flex h-full min-h-[400px] flex-col rounded-xl border border-gray-200 bg-linear-to-br from-indigo-50/80 to-purple-50/80 p-6 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/90 dark:to-gray-900/90 dark:hover:border-gray-600">
                      {/* Quote Icon */}
                      <div className="mb-4 flex items-start justify-between">
                        <QuoteIcon className="h-8 w-8 shrink-0 text-indigo-400 dark:text-indigo-500" />
                        <a
                          href={recommendations.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                          View on LinkedIn
                        </a>
                      </div>

                      {/* Recommendation Text */}
                      <div className="mb-6 flex-1 overflow-hidden">
                        <p className="line-clamp-7 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          {rec.text}
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {rec.name}
                        </div>
                        <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                          {rec.headline}
                        </div>
                        <div className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                          {rec.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {recommendations.recommendations.length > 1 && (
              <>
                <button
                  onClick={scrollPrev}
                  className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:scale-110 hover:bg-indigo-50 active:scale-95 md:-translate-x-6 dark:bg-gray-800 dark:hover:bg-gray-700"
                  aria-label="Previous recommendation"
                >
                  <svg
                    className="h-5 w-5 text-gray-700 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:scale-110 hover:bg-indigo-50 active:scale-95 md:translate-x-6 dark:bg-gray-800 dark:hover:bg-gray-700"
                  aria-label="Next recommendation"
                >
                  <svg
                    className="h-5 w-5 text-gray-700 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {recommendations.recommendations.length > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                {recommendations.recommendations.map((_, index) => {
                  const isActive = selectedIndex === index;
                  return (
                    <button
                      key={index}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={`h-2 rounded-full transition-all ${
                        isActive
                          ? "w-8 bg-indigo-600 dark:bg-indigo-400"
                          : "w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                      }`}
                      aria-label={`Go to recommendation ${index + 1}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
