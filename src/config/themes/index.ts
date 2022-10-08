import { plum, plumDark } from "@radix-ui/colors";

export type ThemeColors = { [key: string]: string };
type Colors = ThemeColors;

type Themes = {
  dark: {
    colors: Colors;
  };
  light: {
    colors: Colors;
  };
};

/**
 *  HOWTO
 */
const brand = {
  brand1: plum.plum1,
};
const brandDark = {
  brand1: plumDark.plum1,
};

/*
Tips: Radix Colors
  scale0: excagerated background
  scale1: app background
  scale2: subtle background
  scale3: UI element background
  scale4: Hovered UI element background
  scale5: Active/selected UI element background
  scale6: Subtle borders and separators
  scale7: UI element border + focus ring
  scale8: Hovered UI element border
  scale9: Solid background / highest chroma
  scale10: Hovered Solid background / lowest contrast
  scale11: Low Contrast
  scale12: High Contrast
  scale13: blackest Contrast
*/

const themes: Themes = {
  light: {
    colors: {
      ...brand,
      background: "rgb(249, 250, 251)",
      text: "rgb(4, 5, 47)",
      typeFaceSecondary: "hsl(223deg 15% 45%)",
      gray1: "hsl(0, 0%, 99%)",
    },
  },
  dark: {
    colors: {
      ...brandDark,
      background: "rgb(22, 24, 29);",
      text: "rgb(232, 232, 253)",
      typeFaceSecondary: "hsl(223deg 15% 65%)",
      gray1: "hsl(0, 0%, 8.5%)",
    },
  },
};

export default themes;
