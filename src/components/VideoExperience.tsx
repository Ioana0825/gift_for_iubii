import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { videoStep } from "../content";
import "./VideoExperience.css";

type Phase = "transition" | "video";

export function VideoExperience({ onFinished }: { onFinished: () => void }) {
  const [phase, setPhase] = useState<Phase>("transition");
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setPhase("video"), 1900);
    return () => clearTimeout(timer);
  }, []);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(true));
  }

  function handleFullscreen() {
    const el = containerRef.current;
    if (el?.requestFullscreen) el.requestFullscreen().catch(() => undefined);
  }

  return (
    <div className="step-shell video-experience" ref={containerRef}>
      <AnimatePresence mode="wait">
        {phase === "transition" && (
          <motion.p
            key="line"
            className="video-experience__transition-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            {videoStep.transitionLine}
          </motion.p>
        )}

        {phase === "video" && (
          <motion.div
            key="video"
            className="video-experience__stage"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {!videoError ? (
              <div className="video-experience__frame">
                <video
                  ref={videoRef}
                  className="video-experience__video"
                  src={videoStep.src}
                  aria-label={videoStep.ariaLabel}
                  controls={isPlaying}
                  playsInline
                  onError={() => setVideoError(true)}
                  onEnded={onFinished}
                />
                {!isPlaying && (
                  <button type="button" className="video-experience__play" onClick={handlePlay} aria-label="Play video">
                    <span className="video-experience__play-icon">▶</span>
                  </button>
                )}
                {isPlaying && (
                  <button type="button" className="ghost-button video-experience__fullscreen" onClick={handleFullscreen}>
                    Fullscreen
                  </button>
                )}
              </div>
            ) : (
              <div className="glass-panel video-experience__missing">
                <p className="video-experience__missing-title">Your video will appear here.</p>
                <p className="video-experience__missing-body">
                  Replace <code>/public/assets/our-video.mp4</code> with your video, then reload.
                </p>
                <button type="button" className="ghost-button" onClick={onFinished}>
                  Continue anyway
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
