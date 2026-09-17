import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function Typewriter({
  text,
  typingSpeed = 90,
  eraseSpeed = 45,
  holdTime = 1800,
  pauseTime = 400,
  className = "",
}) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? text : "");

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(text);
      return;
    }

    let i = 0;
    let phase = "typing"; // typing -> holding -> erasing -> pausing
    let timeoutId;

    function tick() {
      if (phase === "typing") {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          phase = "holding";
          timeoutId = setTimeout(tick, holdTime);
        } else {
          timeoutId = setTimeout(tick, typingSpeed);
        }
      } else if (phase === "holding") {
        phase = "erasing";
        timeoutId = setTimeout(tick, eraseSpeed);
      } else if (phase === "erasing") {
        i -= 1;
        setDisplay(text.slice(0, i));
        if (i <= 0) {
          phase = "pausing";
          timeoutId = setTimeout(tick, pauseTime);
        } else {
          timeoutId = setTimeout(tick, eraseSpeed);
        }
      } else if (phase === "pausing") {
        phase = "typing";
        timeoutId = setTimeout(tick, typingSpeed);
      }
    }

    timeoutId = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [text, reduceMotion, typingSpeed, eraseSpeed, holdTime, pauseTime]);

  return (
    <span className={className}>
      {display}
      {!reduceMotion && <span className="typewriter-cursor">&nbsp;</span>}
    </span>
  );
}
