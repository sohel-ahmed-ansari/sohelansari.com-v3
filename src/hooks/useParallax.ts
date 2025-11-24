import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxOptions {
  offset?: number;
  fade?: boolean;
}

export function useParallax(options: ParallaxOptions = {}): {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
} {
  const { offset = 300, fade = true } = options;
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, offset * 2], [0, offset]);
  const opacity = useTransform(scrollY, [0, offset * 2], [1, fade ? 0 : 1]);

  return { y, opacity };
}
