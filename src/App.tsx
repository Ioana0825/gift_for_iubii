import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StarField } from "./components/StarField";
import { ProgressDots } from "./components/ProgressDots";
import { IntroScreen } from "./components/IntroScreen";
import { QuizStep } from "./components/QuizStep";
import { MemoriesStep } from "./components/MemoriesStep";
import { NotesStep } from "./components/NotesStep";
import { PrizeStep } from "./components/PrizeStep";
import { VideoExperience } from "./components/VideoExperience";
import { FinalScreen } from "./components/FinalScreen";
import type { Step } from "./types";

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function App() {
  const [step, setStep] = useState<Step>("intro");

  // Forward-only navigation — the journey unlocks one step at a time.
  const advance = useCallback((next: Step) => setStep(next), []);

  return (
    <div className="app">
      <StarField />
      <ProgressDots current={step} />
      <AnimatePresence mode="wait">
        <motion.div key={step} variants={pageVariants} initial="initial" animate="animate" exit="exit">
          {step === "intro" && <IntroScreen onBegin={() => advance("quiz")} />}
          {step === "quiz" && <QuizStep onContinue={() => advance("memories")} />}
          {step === "memories" && <MemoriesStep onContinue={() => advance("notes")} />}
          {step === "notes" && <NotesStep onContinue={() => advance("prize")} />}
          {step === "prize" && <PrizeStep onOpen={() => advance("video")} />}
          {step === "video" && <VideoExperience onFinished={() => advance("final")} />}
          {step === "final" && <FinalScreen onRestart={() => advance("intro")} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
