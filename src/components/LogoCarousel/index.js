import React, {useEffect, useRef, useState} from "react";
import styles from "./styles.module.css";

export default function LogoCarousel({speed = 30, gap = 20}) {
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState(0); // pixel translate
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const slideRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    fetch("/data/users.json")
      .then(res => res.json())
      .then(data => {
        if (!mounted) {return;}
        const list = Array.isArray(data) ? data.filter(Boolean) : [];
        setItems(list);
      })
      .catch(() => {});
    return () => {mounted = false;};
  }, []);

  // continuous scrolling using requestAnimationFrame
  useEffect(() => {
    if (!trackRef.current || !slideRef.current || items.length === 0) {return;}

    // compute total width of one set using track scrollWidth / 2 (we duplicate items)
    const totalWidth = Math.max(1, Math.floor(trackRef.current.scrollWidth / 2));

    const tick = (t) => {
      if (paused) {
        lastTimeRef.current = t;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (lastTimeRef.current === null) {lastTimeRef.current = t;}
      const delta = (t - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = t;
      // advance by speed (px per second)
      setPosition(prev => {
        const next = prev + delta * speed;
        // if we've scrolled one set, wrap seamlessly
        if (next >= totalWidth) {
          return next - totalWidth;
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) {cancelAnimationFrame(rafRef.current);}
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [items, paused, speed, gap]);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-position}px)`;
    }
  }, [position]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  // Render duplicated list for seamless scroll
  const display = items.length > 0 ? [...items, ...items] : [];

  return (
    <div
      className={`${styles.logoCarousel} ${styles.whiteBg}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Users carousel"
      ref={viewportRef}
    >
      <div className={styles.viewport}>
        <div className={styles.track} ref={trackRef}>
          {display.map((it, idx) => (
            <a
              key={idx}
              className={styles.slide}
              href={it.infolink || it.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              title={it.caption || ""}
              ref={idx === 0 ? slideRef : null}
            >
              <img src={`/img/${it.image}`} alt={it.caption || ""} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
