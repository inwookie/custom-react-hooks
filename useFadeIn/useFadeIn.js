import { useEffect, useRef } from "react";

export const useFadeIn = (
  startOpacity = 0,
  endOpacity = 1,
  duration = 0.5,
  cubicBezier = "linear",
  delay = 0
) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ${cubicBezier}`;
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = endOpacity;
    }
  }, []);

  return { ref: element, style: { opacity: startOpacity } };
};
