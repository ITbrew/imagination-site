'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BackgroundSlideshow from "@/components/BackgroundSlideshow";

const sentences = [
  "A story about a brave dog...",
  "A tale set in a magical forest...",
  "A young robot who learns to dream..."
];

const TYPE_SPEED = 80;
const HOLD_DURATION = 1500; // ms

export default function HeroWithSlideshow() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let cancelled = false;

    function typeChar(i: number) {
      if (cancelled) return;
      if (i < sentences[index].length) {
        setText(sentences[index].slice(0, i + 1));
        setTimeout(() => typeChar(i + 1), TYPE_SPEED);
      } else {
        // Done typing, wait and then move to next
        setTimeout(() => {
          if (!cancelled) {
            setIndex((prev) => (prev + 1) % sentences.length);
          }
        }, HOLD_DURATION);
      }
    }

    setText(""); // clear immediately
    typeChar(0);

    return () => {
      cancelled = true; // stops any remaining timeouts
    };
  }, [index]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <BackgroundSlideshow index={index} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Create Your Own Storybook
        </h1>
        <p className="text-xl text-zinc-300 h-10">{text}&nbsp;</p>
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition">
          Start Your Story
        </button>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-0 pointer-events-none" />
    </section>
  );
}
