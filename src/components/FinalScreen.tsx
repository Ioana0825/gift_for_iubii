import { motion } from "framer-motion";
import { finalStep } from "../content";
import "./FinalScreen.css";

export function FinalScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="step-shell final">
      {finalStep.lines.map((line, i) => (
        <motion.p
          key={line}
          className="final__line"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {line}
        </motion.p>
      ))}

      <motion.span
        className="final__symbol"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 + finalStep.lines.length * 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {finalStep.symbol}
      </motion.span>

      {finalStep.signature && (
        <motion.p
          className="final__signature"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + finalStep.lines.length * 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {finalStep.signature}
        </motion.p>
      )}

      <motion.button
        type="button"
        className="ghost-button final__restart"
        onClick={onRestart}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 + finalStep.lines.length * 1, duration: 0.9 }}
      >
        {finalStep.restartLabel}
      </motion.button>
    </div>
  );
}
