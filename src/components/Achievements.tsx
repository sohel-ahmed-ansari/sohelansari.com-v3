import type { KeyAchievement } from "../types/resume";

interface AchievementsProps {
  achievements: KeyAchievement[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 to-cyan-600"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {achievement.title}
              </h3>
              <p className="text-white/90">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
