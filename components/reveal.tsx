"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Vertraging in ms voor stagger binnen een groep. */
  delay?: number;
  /** Welk element gerenderd wordt (default div). */
  as?: ElementType;
  className?: string;
};

/**
 * Onthult content zodra die in beeld komt: alleen opacity + transform
 * (GPU, geen layout), één keer, en volledig uit zodra de gebruiker
 * reduced-motion heeft staan (afgevangen in CSS). Bewust CSS-gedreven
 * i.p.v. een animatie-library, zodat het off-main-thread blijft.
 */
export function Reveal({ children, delay = 0, as, className = "" }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={delay ? ({ "--d": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
