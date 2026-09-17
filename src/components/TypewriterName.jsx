import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Types `text` character by character, pauses, erases it character by
 * character, pauses, then repeats — a classic "typewriter" loop.
 * Falls back to showing the full text statically when the user prefers
 * reduced motion.
 */
export default function TypewriterName({
  text,
  typeSpeed = 90,
  eraseSpeed = 45,
  pauseAfterType = 1800,
  pauseAfterErase = 500,
}) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? text : "");

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(text);
      return undefined;
    }

    let index = 0;
    let phase = "typing"; // typing -> pausedTyped -> erasing -> pausedErased -> typing...
    let timeoutId;

    function tick() {
      if (phase === "typing") {
        index += 1;
        setDisplay(text.slice(0, index));
        if (index >= text.length) {
          phase = "pausedTyped";
          timeoutId = setTimeout(tick, pauseAfterType);
        } else {
          timeoutId = setTimeout(tick, typeSpeed);
        }
      } else if (phase === "pausedTyped") {
        phase = "erasing";
        timeoutId = setTimeout(tick, eraseSpeed);
      } else if (phase === "erasing") {
        index -= 1;
        setDisplay(text.slice(0, index));
        if (index <= 0) {
          phase = "pausedErased";
          timeoutId = setTimeout(tick, pauseAfterErase);
        } else {
          timeoutId = setTimeout(tick, eraseSpeed);
        }
      } else if (phase === "pausedErased") {
        phase = "typing";
        timeoutId = setTimeout(tick, typeSpeed);
      }
    }

    timeoutId = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [text, reduceMotion, typeSpeed, eraseSpeed, pauseAfterType, pauseAfterErase]);

  return (
    <span className="inline-block min-h-[1em]">
      {display}
      <span
        aria-hidden="true"
        className="ms-1 inline-block h-[0.85em] w-[3px] translate-y-[0.05em] bg-cyan align-middle motion-safe:animate-pulse"
      />
    </span>
  );
}
