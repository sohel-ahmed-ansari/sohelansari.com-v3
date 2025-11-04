import type { KeyAchievement } from "../types/resume";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import { BadgeCheckIcon } from "lucide-react";

interface AchievementsProps {
  achievements: KeyAchievement[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  return (
    <section
      id="achievements"
      className="bg-linear-to-br from-indigo-800 to-purple-800 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionTitle title="Key Achievements" variant="dark-bg" />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="flex h-full transform flex-col rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/20 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <BadgeCheckIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {achievement.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-white/90">
                  {achievement.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
