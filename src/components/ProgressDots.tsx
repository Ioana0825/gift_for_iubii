import { TRACKED_STEPS, type Step } from "../types";
import "./ProgressDots.css";

export function ProgressDots({ current }: { current: Step }) {
  const currentIndex = TRACKED_STEPS.indexOf(current);
  if (currentIndex === -1) return null;

  return (
    <nav className="progress-dots" aria-label="Journey progress">
      {TRACKED_STEPS.map((step, index) => {
        const state = index < currentIndex ? "done" : index === currentIndex ? "current" : "upcoming";
        return (
          <span key={step} className={`progress-dots__dot progress-dots__dot--${state}`} aria-hidden="true" />
        );
      })}
      <span className="progress-dots__label">
        {currentIndex + 1} / {TRACKED_STEPS.length}
      </span>
    </nav>
  );
}
