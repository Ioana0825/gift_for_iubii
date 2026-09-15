import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { notesStep } from "../content";
import "./NotesStep.css";

export function NotesStep({ onContinue }: { onContinue: () => void }) {
  const [index, setIndex] = useState(0);
  const [showOutro, setShowOutro] = useState(false);
  const total = notesStep.notes.length;
  const isLast = index === total - 1;

  function handleNext() {
    if (isLast) {
      setShowOutro(true);
      return;
    }
    setIndex((i) => i + 1);
  }

  return (
    <div className="step-shell notes">
      <p className="eyebrow">step four</p>
      <h2 className="notes__heading">{notesStep.heading}</h2>
      <p className="notes__subtitle">{notesStep.subtitle}</p>

      <div className="notes__stage">
        <AnimatePresence mode="wait">
          {!showOutro ? (
            <motion.p
              key={index}
              className="notes__note"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {notesStep.notes[index]}
            </motion.p>
          ) : (
            <motion.div
              key="outro"
              className="notes__outro"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{notesStep.outroPrefix}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!showOutro ? (
        <div className="notes__controls">
          <div className="notes__dots" aria-hidden="true">
            {notesStep.notes.map((_, i) => (
              <span key={i} className={`notes__dot ${i === index ? "notes__dot--active" : ""}`} />
            ))}
          </div>
          <button type="button" className="ghost-button" onClick={handleNext}>
            {isLast ? "Keep going" : "Next"}
          </button>
        </div>
      ) : (
        <button type="button" className="glow-button notes__continue" onClick={onContinue}>
          {notesStep.continueLabel}
        </button>
      )}
    </div>
  );
}
