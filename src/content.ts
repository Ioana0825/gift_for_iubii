/**
 * ────────────────────────────────────────────────────────────────
 *  EDIT ME
 * ────────────────────────────────────────────────────────────────
 * Everything you'll want to personalize lives in this one file:
 * his name, the quiz, the memories, the love notes, and the video.
 *
 * Photos go in /public/assets/ — just drop a file in and point the
 * `image` field below at it, e.g. "/assets/memory-1.jpg".
 * If a memory has no `image`, a soft glowing placeholder is shown
 * instead, so nothing ever looks broken.
 * ────────────────────────────────────────────────────────────────
 */

/** His name. Used in a couple of quiet, personal touches. */
export const partnerName = "you";

// ────────────────────────────────────────────────────────────────
// STEP 1 — INTRO
// ────────────────────────────────────────────────────────────────
export const intro = {
  eyebrow: "for you, always",
  title: "I made something for you. 😁",
  body: "It won't take long.\nBut I hope you'll remember it for a long time., pookie 💞",
  cta: "Begin the journey",
};

// ────────────────────────────────────────────────────────────────
// STEP 2 — DO YOU REMEMBER? (quiz)
// ────────────────────────────────────────────────────────────────
export type QuizQuestion = {
  id: string;
  emoji: string;
  question: string;
  options: string[];
  /** index into `options` */
  correctIndex: number;
  /** when true, every option counts as correct (correctIndex is ignored for scoring) */
  allCorrect?: boolean;
  correctReaction: string;
  wrongReaction: string;
};

export const quiz = {
  heading: "Do you remember? 💭",
  subtitle: "Let's see how well you remember us 👀✨",
  passHeading: "You passed. Obviously. 🙄",
  passBody: "I like you too much to fail you. 🥰",
  continueLabel: "Continue",
  questions: [
    {
      id: "q1",
      emoji: "👀",
      question: "When was the first time we met / talked IRL?",
      options: ["At the café at school ☕", "Your graduation ceremony 🎓", "In the school hallway 🏫", "In the car with Duda 🚗"],
      correctIndex: 0,
      correctReaction: "Yes! I remember that day so clearly. ☕✨",
      wrongReaction: "Close... but I remember it differently 👀",
    },
    {
      id: "q2",
      emoji: "👁️",
      question: "What was one of the first things you noticed about me?",
      options: ["That I'm smart 🤓", "That I'm sportive 🏃‍♀️", "That I'm pretty 💅", "That I'm antisocial 🙃"],
      correctIndex: 0,
      allCorrect: true,
      correctReaction: "Correct. Yep — all of it, actually. 😌✨",
      wrongReaction: "There's no wrong answer here. 🙂",
    },
    {
      id: "q3",
      emoji: "🥹",
      question: "What was one of our best moments?",
      options: ["The night of 16th June 2023 🥹", "Date 3 when I laid on your chest 🥰", "Our first kiss 😘", "Our last date (ayooo 🤨)"],
      correctIndex: 1,
      correctReaction: "Melting. That's exactly the one. 🥰💕",
      wrongReaction: "Sweet guess, but not quite. 😅",
    },
    {
      id: "q4",
      emoji: "📍",
      question: "Which place reminds you of us?",
      options: ["Freddy 🌳", "Volvo 🚗", "Monastery Dragomirna ⛪", "Cetate 🏰"],
      correctIndex: 0,
      correctReaction: "Freddy forever. 🌳💙",
      wrongReaction: "Nice try, but that's not the spot. 🥲",
    },
    {
      id: "q5",
      emoji: "💬",
      question: "What do I say more than anything else?",
      options: ["iubiiiii 🥹", "love youuuuu 🥰", "ayoooo 😏", "you naugthy naughty 😈"],
      correctIndex: 1,
      correctReaction: "Every single day. 🥰💌",
      wrongReaction: "Nope. But I appreciate the confidence. 😏",
    },
  ] satisfies QuizQuestion[],
};

// ────────────────────────────────────────────────────────────────
// STEP 3 — PIECES OF US (memories)
// ────────────────────────────────────────────────────────────────
export type Memory = {
  id: string;
  title: string;
  date: string;
  /** Optional — omit for no description text in the modal. */
  description?: string;
  insideJoke?: string;
  /** Optional path under /public, e.g. "/assets/memory-1.jpg" */
  image?: string;
};

export const memoriesStep = {
  heading: "Pieces of us 💞",
  subtitle: "A few little moments that became part of our story. 💙",
  hint: "Tap a star to open a memory",
  progressLabel: (opened: number, total: number) => `${opened} of ${total} memories found`,
  outro: {
    title: "Somehow, we've already collected so many little moments.",
    continueLabel: "Continue",
  },
  memories: [
    {
      id: "m1",
      title: "One of my favorite memories with you.",
      date: "placeholder date",
      image: "/assets/memory-1.webp",
    },
    {
      id: "m2",
      title: "A moment I wish I could relive.",
      date: "placeholder date",
      image: "/assets/memory-2.webp",
    },
    {
      id: "m3",
      title: "Something only we would understand.",
      date: "placeholder date",
      image: "/assets/memory-3.webp",
    },
    {
      id: "m4",
      title: "One of our best photos.",
      date: "placeholder date",
      image: "/assets/memory-4.webp",
    },
  ] satisfies Memory[],
};

// ────────────────────────────────────────────────────────────────
// STEP 4 — A FEW THINGS I WANT YOU TO KNOW (love notes)
// ────────────────────────────────────────────────────────────────
export const notesStep = {
  heading: "A few things I want you to know",
  subtitle: "Things I probably don't say enough.",
  notes: [
    "I love how you make ordinary days feel special.",
    "I love that I can be completely weird around you.",
    "I love that even after all this time, you still make me excited to see you.",
    "I love how we can be productive and lazy together.",
    "I also love that you tolerate me.\nThat's a pretty significant achievement.",
  ],
  outroPrefix: "And that's only a tiny part of what I could tell you.",
  continueLabel: "One last thing",
};

// ────────────────────────────────────────────────────────────────
// STEP 5 — THE PRIZE
// ────────────────────────────────────────────────────────────────
export const prizeStep = {
  lines: ["You've reached the end.", "But I think I saved the best part for last.", "Are you ready?"],
  cta: "Open your prize",
};

// ────────────────────────────────────────────────────────────────
// VIDEO
// ────────────────────────────────────────────────────────────────
export const videoStep = {
  transitionLine: "Made with love, just for you.",
  /** Replace /public/assets/our-video.mp4 with your real video. */
  src: "/assets/our-video.mp4",
  ariaLabel: "A video made for you",
};

// ────────────────────────────────────────────────────────────────
// FINAL SCREEN
// ────────────────────────────────────────────────────────────────
export const finalStep = {
  lines: ["And this isn't the end.", "There are still so many memories left to make.", "Until then...\nI'll keep choosing you."],
  symbol: "❤",
  signature: "my iubi",
  restartLabel: "Start again",
};
