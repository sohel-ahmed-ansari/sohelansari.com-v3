import { motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  loop?: boolean;
  loopDelay?: number;
}

const TypewriterText = ({
  text,
  delay = 0,
  loop = false,
  loopDelay = 5000,
}: TypewriterTextProps) => {
  const [control, setControl] = useState("visible");
  const words = text.split(" ");

  // Generate random delays for each character for natural typing effect
  const charDelays = useMemo(() => {
    const delays: number[] = [];
    let currentDelay = delay;

    for (let i = 0; i < text.length; i++) {
      // Random duration between 0.02s and 0.08s
      const randomDuration = 0.03 + Math.random() * 0.1;
      currentDelay += randomDuration;
      delays.push(currentDelay);
    }
    return delays;
  }, [text.length, delay]);

  useEffect(() => {
    if (!loop) return;

    if (control === "visible") {
      // Total duration is the delay of the last character + its transition duration
      const lastCharDelay = charDelays[charDelays.length - 1] || delay;
      const totalTime = lastCharDelay * 1000 + 100 + loopDelay;

      const timer = setTimeout(() => {
        setControl("hidden");
      }, totalTime);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setControl("visible");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [control, delay, loop, loopDelay, charDelays]);

  const letter: Variants = {
    hidden: { opacity: 0, y: 5, display: "none", transition: { duration: 0 } },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      display: "inline-block",
      transition: {
        delay: charDelays[i],
        duration: 0.1,
      },
    }),
  };

  let charIndex = 0;

  return (
    <span className="inline-block">
      {words.map((word, wordIndex) => {
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndexInWord) => {
              const index = charIndex;
              charIndex++;
              return (
                <motion.span
                  key={charIndexInWord}
                  variants={letter}
                  initial="hidden"
                  animate={control}
                  custom={index}
                >
                  {char}
                </motion.span>
              );
            })}
            {/* Add space after word if not last */}
            {wordIndex < words.length - 1 && (
              <motion.span
                variants={letter}
                initial="hidden"
                animate={control}
                custom={charIndex++}
              >
                &nbsp;
              </motion.span>
            )}
          </span>
        );
      })}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
        className="-mt-2 inline-block h-[1em] w-[2px] translate-y-[2px] bg-indigo-400 align-middle"
      />
    </span>
  );
};

export default TypewriterText;
