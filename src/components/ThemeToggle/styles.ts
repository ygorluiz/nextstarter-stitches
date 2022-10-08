import { styled, theme } from "@root/config";
import { motion } from "framer-motion";

const colorBrand = theme.colors.brand;
export const Button = styled(motion.button, {
  $$shadowHoverPrimary: "0 2px 40px -4px $colors$inputFocus",
  $$borderColor: "transparent",
  $$color: "$typefaceTertiary",
  $$ColorBrand: "$colors$brand",
  right: "20%",
  position: "relative",
  WebkitAppearance: "none",
  WebkitTapHighlightColor: "transparent",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  MsUserSelect: "none",
  userSelect: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: "0",
  outline: "none",
  cursor: "pointer",
  border: "0",
  /* Constant properties */
  width: "44px",
  height: "44px",
  background: "transparent",
  transition: "color 0.3s ease, transform 0.3s ease",
  transform: "scale(var(--button-content-scale, 1)) translateZ(0)",
  borderRadius: "$radii$2",
  color: "$$color",

  "&::after": {
    zIndex: "0",
    position: "absolute",
    content: "''",
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "var(--corner, $radii$2)",
    transition:
      "box-shadow 0.3s ease, border-color 0.2s, background 0.3s ease,\n      transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    background: "var(--background, $foreground)",
    transform: "scale(var(--button-background-scale, 1)) translateZ(0)",
    border: "var(--border-thickness, 1px) solid $$borderColor",
    boxShadow: "var(--shadow, none)",
  },

  "&:hover": {
    "&:not(:disabled)": {
      $$borderColor: colorBrand,
      "--border-thickness": "2px",
      $$color: colorBrand,
      "--corner": "calc(var(--border-radius-1) + 2px)",
      "--button-background-scale": "0.92",
      "--shadow": "$$shadowHoverPrimary",
    },
  },

  "&:focus-visible": {
    "--border-color": colorBrand,
    "--border-thickness": "2px",
    $$color: colorBrand,
    "--corner": "calc(var(--border-radius-1) + 2px)",
    "--button-background-scale": 0.92,
    "--shadow": "$$shadowHoverPrimary",
  },

  "&:active": {
    "--button-content-scale": "0.95",
  },
});
