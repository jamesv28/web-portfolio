// Maps the accent names used in data.jsx to static Tailwind class strings
// (Tailwind needs full class names in source to generate them).
export const TONE_TEXT = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  neutral: "text-text-secondary",
};

// Full class strings (not built from parts) so Tailwind generates them.
export const TONE_PILL = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  tertiary: "bg-tertiary/10 text-tertiary",
};

export const TONE_BG = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
};
