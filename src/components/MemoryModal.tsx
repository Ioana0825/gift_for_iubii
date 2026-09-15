import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Memory } from "../content";
import "./MemoryModal.css";

export function MemoryModal({ memory, onClose }: { memory: Memory; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    closeRef.current?.focus();
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const showImage = Boolean(memory.image) && !imageFailed;

  return (
    <motion.div
      className="memory-modal__overlay"
      role="presentation"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="glass-panel memory-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${memory.id}-title`}
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 10 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <button type="button" className="memory-modal__close" onClick={onClose} ref={closeRef} aria-label="Close memory">
          ✕
        </button>

        <div className="memory-modal__media">
          {showImage ? (
            <img src={memory.image} alt={memory.title} onError={() => setImageFailed(true)} />
          ) : (
            <div className="memory-modal__placeholder" aria-hidden="true">
              <span>✦</span>
            </div>
          )}
        </div>

        <p className="memory-modal__date">{memory.date}</p>
        <h3 id={`${memory.id}-title`} className="memory-modal__title">
          {memory.title}
        </h3>
        <p className="memory-modal__description">{memory.description}</p>
        {memory.insideJoke && <p className="memory-modal__joke">{memory.insideJoke}</p>}
      </motion.div>
    </motion.div>
  );
}
