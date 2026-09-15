import { motion } from "framer-motion";
import { prizeStep } from "../content";
import "./PrizeStep.css";

export function PrizeStep({ onOpen }: { onOpen: () => void }) {
  const lastLineDelay = 0.5 + prizeStep.lines.length * 0.9;

  return (
    <div className="step-shell prize">
      <div className="prize__veil" aria-hidden="true" />

      <div className="prize__lines">
        {prizeStep.lines.map((line, i) => (
          <motion.p
            key={line}
            className={i === prizeStep.lines.length - 1 ? "prize__line prize__line--last" : "prize__line"}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.button
        type="button"
        className="glow-button prize__cta"
        onClick={onOpen}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: lastLineDelay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        ❤️ {prizeStep.cta}
      </motion.button>
    </div>
  );
}
