import { motion } from "framer-motion";
import { intro } from "../content";
import "./IntroScreen.css";

export function IntroScreen({ onBegin }: { onBegin: () => void }) {
  return (
    <div className="step-shell intro">
      <motion.div
        className="intro__moon"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="intro__moon-glow" />
      </motion.div>

      <motion.p
        className="eyebrow intro__eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.9 }}
      >
        {intro.eyebrow}
      </motion.p>

      <motion.h1
        className="intro__title"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {intro.title}
      </motion.h1>

      <motion.p
        className="intro__body"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {intro.body}
      </motion.p>

      <motion.button
        type="button"
        className="glow-button intro__cta"
        onClick={onBegin}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {intro.cta}
      </motion.button>
    </div>
  );
}
