import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { memoriesStep } from "../content";
import { MemoryModal } from "./MemoryModal";
import "./MemoriesStep.css";

const GOLDEN_ANGLE = 137.508 * (Math.PI / 180);

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

/** Scatters memory nodes across the canvas like a small constellation. */
function layoutPositions(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const t = i / Math.max(count - 1, 1);
    const angle = i * GOLDEN_ANGLE;
    const radius = 0.22 + t * 0.3;
    const x = 50 + Math.cos(angle) * radius * 100;
    const y = 50 + Math.sin(angle) * radius * 68;
    return { x: clamp(x, 12, 88), y: clamp(y, 14, 86) };
  });
}

export function MemoriesStep({ onContinue }: { onContinue: () => void }) {
  const { memories } = memoriesStep;
  const positions = useMemo(() => layoutPositions(memories.length), [memories.length]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [opened, setOpened] = useState<Set<string>>(new Set());

  const allOpened = opened.size >= memories.length;
  const activeMemory = memories.find((m) => m.id === openId) ?? null;

  function openMemory(id: string) {
    setOpenId(id);
    setOpened((prev) => new Set(prev).add(id));
  }

  return (
    <div className="step-shell memories">
      <p className="eyebrow">step three</p>
      <h2 className="memories__heading">{memoriesStep.heading}</h2>
      <p className="memories__subtitle">{memoriesStep.subtitle}</p>
      <p className="memories__hint">{memoriesStep.hint}</p>

      <div className="memories__constellation">
        <svg className="memories__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {positions.slice(1).map((pos, i) => (
            <line
              key={i}
              x1={positions[i].x}
              y1={positions[i].y}
              x2={pos.x}
              y2={pos.y}
              stroke="rgba(180, 175, 230, 0.18)"
              strokeWidth="0.25"
              strokeDasharray="1.2 2"
            />
          ))}
        </svg>

        {memories.map((memory, i) => {
          const pos = positions[i];
          const isOpened = opened.has(memory.id);
          return (
            <button
              key={memory.id}
              type="button"
              className={`memories__node ${isOpened ? "memories__node--opened" : ""}`}
              style={{ left: `${pos.x}%`, top: `${pos.y}%`, animationDelay: `${i * 0.6}s` }}
              onClick={() => openMemory(memory.id)}
              aria-label={memory.title}
            >
              <span className="memories__node-core" />
              <span className="memories__node-label">{memory.title}</span>
            </button>
          );
        })}
      </div>

      <p className="memories__progress" aria-live="polite">
        {memoriesStep.progressLabel(opened.size, memories.length)}
      </p>

      <AnimatePresence>
        {allOpened && (
          <motion.div
            className="memories__outro"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{memoriesStep.outro.title}</p>
            <button type="button" className="glow-button" onClick={onContinue}>
              {memoriesStep.outro.continueLabel}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeMemory && <MemoryModal memory={activeMemory} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </div>
  );
}
