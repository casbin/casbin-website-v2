import React, {useEffect, useRef, useState} from "react";
import styles from "./styles.module.css";

const AnimatedText = ({words = [], interval = 3000}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fixedWidth, setFixedWidth] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const measureRef = useRef(null);

  useEffect(() => {
    // Safety check for empty array
    if (words.length === 0) {return;}

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  // Measure the width of the longest word on mount
  useEffect(() => {
    if (words.length === 0) {return;}

    // Create a temporary span to measure text width
    const measurer = document.createElement("span");
    measurer.style.visibility = "hidden";
    measurer.style.position = "absolute";
    measurer.style.whiteSpace = "nowrap";
    measurer.style.fontSize = "clamp(2.2rem, 6vw, 4.2rem)"; // Match hero title font size
    measurer.style.fontWeight = "700";
    measurer.style.fontFamily = "inherit";
    document.body.appendChild(measurer);

    // Find the longest word
    let maxWidth = 0;
    words.forEach(word => {
      measurer.textContent = word;
      const width = measurer.offsetWidth;
      if (width > maxWidth) {
        maxWidth = width;
      }
    });

    document.body.removeChild(measurer);
    // Add extra space for the underline padding
    setFixedWidth(maxWidth - 50);
    // Set underline width to 100% of the text width
    setUnderlineWidth(maxWidth - 50);
  }, [words]);

  // Return empty if no words provided
  if (words.length === 0) {return null;}

  return (
    <span
      className={styles.animatedTextContainer}
      aria-live="polite"
      aria-atomic="true"
      style={{width: fixedWidth > 0 ? `${fixedWidth}px` : "auto", display: "inline-block"}}
    >
      <span key={currentIndex} className={styles.animatedText} ref={measureRef}>
        {words[currentIndex]}
      </span>
      <svg
        className={styles.wavyUnderline}
        viewBox="0 0 200 10"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{width: `${underlineWidth}px`}}
      >
        <path
          d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </span>
  );
};

export default AnimatedText;
