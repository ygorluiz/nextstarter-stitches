import { calculateScale } from "./helper";

const fallbacks = {
  mono: [
    "ui-monospace",
    "SFMono-Regular",
    "SF Mono",
    "Menlo",
    "Monaco",
    "Consolas",
    '"Liberation Mono"',
    '"Courier New"',
    "monospace",
  ].join(","),
  sans: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ].join(","),
  serif: [
    "ui-serif",
    "Georgia",
    "Cambria",
    '"Times New Roman"',
    "Times",
    "serif",
  ].join(","),
};

const fonts = {
  "fallback-mono": fallbacks.mono,
  "fallback-sans": fallbacks.sans,
  "fallback-serif": fallbacks.serif,
  mono: "$fallback-mono",
  sans: "$fallback-sans",
  serif: "$fallback-serif",
  inter: "'Inter', sans-serif",
  system:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Inter", "Helvetica Neue", sans-serif',
};

const fontSizes = {
  0: calculateScale(0),
  1: calculateScale(1),
  2: calculateScale(2),
  3: calculateScale(3),
  4: calculateScale(4),
  5: calculateScale(5),
  6: "300px",
  7: calculateScale(-1),
};

const fontWeights = {
  1: "100",
  2: "200",
  3: "300",
  4: "400",
  5: "500",
  6: "600",
  7: "700",
  8: "800",
  9: "900",
};

export { fonts, fontSizes, fontWeights };
