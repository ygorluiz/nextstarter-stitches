import { styled, theme } from "@root/config";

export const Wrapper = styled("div", {
  m: "$space$3",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});
export const Container = styled.withConfig({
  componentId: "Content",
  displayName: "displayName",
})("div", {
  display: "flex",
  m: "0 auto",
  fd: "column",
  width: "100%",
  maxWidth: 1200,
  color: "$text",
  fontWeight: theme.fontWeights[9],
  fontSize: theme.fontSizes[5],
  fontFamily: theme.fonts.inter,
  minWidth: "315px",
});
