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
  correctReaction: string;
  wrongReaction: string;
};

export const quiz = {
  heading: "Do you remember?",
  subtitle: "Let's see how well you remember us 👀",
  passHeading: "You passed. Obviously. 🙄",
  passBody: "I like you too much to fail you. 🥰",
  continueLabel: "Continue",
  questions: [
    {
      id: "q1",
      emoji: "🚩",
      question: "Where did our story begin?",
      options: ["A university hallway", "Online, late at night", "Through mutual friends", "By complete accident"],
      correctIndex: 1,
      correctReaction: "Exactly. I remember that night perfectly. ✨",
      wrongReaction: "Close... but I remember it differently 👀",
    },
    {
      id: "q2",
      emoji: "👁️",
      question: "What was one of the first things you noticed about me?",
      options: ["My laugh", "My terrible jokes", "How much I talk", "My taste in music"],
      correctIndex: 0,
      correctReaction: "Correct. You've mentioned it about a thousand times. 😌",
      wrongReaction: "Unfortunately, your girlfriend remembers better. 😎",
    },
    {
      id: "q3",
      emoji: "🤣",
      question: "What was one of our funniest moments?",
      options: [
        "That one voice message you can never live down",
        "The time we got hopelessly lost",
        "Our very first video call disaster",
        "Literally any random Tuesday",
      ],
      correctIndex: 0,
      correctReaction: "I still think about it and laugh. Every time. 😂",
      wrongReaction: "Nice try. I have receipts. 🎙️",
    },
    {
      id: "q4",
      emoji: "🌅",
      question: "Which place reminds you most of us?",
      options: ["Nowhere in particular", "A place we've never even been", "Our favorite spot", "My bedroom ceiling, from all our calls"],
      correctIndex: 2,
      correctReaction: "Yes. That place is ours now, forever. 🤍",
      wrongReaction: "Hmm. Not quite what I had in mind. 🥲",
    },
    {
      id: "q5",
      emoji: "💌",
      question: "What do I say to you more than anything else?",
      options: ["\"Good morning\"", "\"I miss you\"", "\"Did you eat?\"", "All of the above, constantly"],
      correctIndex: 3,
      correctReaction: "Correct. All of it. Every single day. 💙",
      wrongReaction: "A for effort. Still wrong though. 🙃",
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
  description: string;
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
      title: "A moment I wish I could relive.",
      date: "placeholder date",
      description: "Add a short description of this memory here — where it happened, what it felt like.",
      insideJoke: "Optional inside joke goes here.",
      image: "/assets/memory-1.jpg",
    },
    {
      id: "m2",
      title: "A moment that still makes me laugh.",
      date: "placeholder date",
      description: "Add a short description of this memory here.",
      image: "/assets/memory-2.jpg",
    },
    {
      id: "m3",
      title: "One of my favorite memories with you.",
      date: "placeholder date",
      description: "Add a short description of this memory here.",
      insideJoke: "Optional inside joke goes here.",
      image: "/assets/memory-3.jpg",
    },
    {
      id: "m4",
      title: "Something only we would understand.",
      date: "placeholder date",
      description: "Add a short description of this memory here.",
      image: "/assets/memory-4.jpg",
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
    "I love that you're my favorite person to do absolutely nothing with.",
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
  restartLabel: "Start again",
};
