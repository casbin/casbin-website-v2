import React, {useEffect, useState} from "react";
import styles from "./styles.module.css";

const AnimatedText = ({words = [], interval = 3000}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={styles.animatedTextContainer}>
      <span key={currentIndex} className={styles.animatedText}>
        {words[currentIndex]}
        <svg
          className={styles.wavyUnderline}
          viewBox="0 0 200 10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </span>
    </span>
  );
};

export default AnimatedText;
