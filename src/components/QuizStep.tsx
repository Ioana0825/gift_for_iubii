import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quiz } from "../content";
import "./QuizStep.css";

export function QuizStep({ onContinue }: { onContinue: () => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const total = quiz.questions.length;
  const question = quiz.questions[index];
  const isLast = index === total - 1;
  const isCorrect = selected !== null && selected === question.correctIndex;

  function handleSelect(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
  }

  function handleNext() {
    if (isLast) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  if (finished) {
    return (
      <div className="step-shell quiz">
        <motion.div
          className="glass-panel quiz__summary"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="quiz__summary-sparkle" aria-hidden="true">
            ✦
          </span>
          <h2 className="quiz__summary-title">{quiz.passHeading}</h2>
          <p className="quiz__summary-body">{quiz.passBody}</p>
          <button type="button" className="glow-button" onClick={onContinue}>
            {quiz.continueLabel}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="step-shell quiz">
      <p className="eyebrow">step two</p>
      <h2 className="quiz__heading">{quiz.heading}</h2>
      <p className="quiz__subtitle">{quiz.subtitle}</p>

      <p className="quiz__counter">
        {index + 1} / {total}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          className="glass-panel quiz__card"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="quiz__question">
            <span aria-hidden="true">{question.emoji} </span>
            {question.question}
          </p>

          <div className="quiz__options" role="group" aria-label={question.question}>
            {question.options.map((option, optionIndex) => {
              const isSelected = selected === optionIndex;
              const revealCorrect = selected !== null && optionIndex === question.correctIndex;
              return (
                <button
                  key={option}
                  type="button"
                  className={[
                    "quiz__option",
                    isSelected ? "quiz__option--selected" : "",
                    isSelected && isCorrect ? "quiz__option--correct" : "",
                    isSelected && !isCorrect ? "quiz__option--wrong" : "",
                    revealCorrect && !isSelected ? "quiz__option--hint" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => handleSelect(optionIndex)}
                  disabled={selected !== null}
                  aria-pressed={isSelected}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {selected !== null && (
              <motion.div
                className={`quiz__reaction ${isCorrect ? "quiz__reaction--correct" : "quiz__reaction--wrong"}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {isCorrect && (
                  <span className="quiz__sparkles" aria-hidden="true">
                    <span>✦</span>
                    <span>✧</span>
                    <span>✦</span>
                  </span>
                )}
                <p>{isCorrect ? question.correctReaction : question.wrongReaction}</p>
                <button type="button" className="ghost-button quiz__next" onClick={handleNext}>
                  {isLast ? "See how you did" : "Next"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
