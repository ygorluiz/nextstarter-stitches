import { createStitches } from "@ygorluiz/styles";
import type { CSS as StitchesCSS } from "@ygorluiz/styles";

import { Providers } from "../components/Provider";

import themes from "./themes";
import { media } from "./tokens/media";
import { radii } from "./tokens/radii";
import { shadows } from "./tokens/shadows";
import { sizes } from "./tokens/sizes";
import { spaces as space } from "./tokens/spaces";
import { fonts, fontSizes, fontWeights } from "./tokens/typography";
import { utils } from "./tokens/utils";
import { zIndices } from "./tokens/z-indices";

// @note(stitches) init theme with lightColors
const { colors } = themes.light;

const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  reset,
  styled,
  theme,
} = createStitches({
  media,
  theme: {
    borderWidths: {},
    borderStyles: {},
    colors,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings: {},
    lineHeights: {},
    radii,
    shadows,
    sizes,
    space,
    transitions: {},
    zIndices,
  },
  utils,
});

const darkTheme = createTheme("dark-theme", themes.dark);

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from "@ygorluiz/styles";

export {
  config,
  createTheme,
  css,
  darkTheme,
  getCssText,
  globalCss,
  keyframes,
  reset,
  styled,
  theme,
  Providers,
};
