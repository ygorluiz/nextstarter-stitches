import { styled } from "@root/config";

export const Wrapper = styled("main", {
  my: "$space$2",
  width: "100%",
  display: "flex",
  ai: "center",
  jc: "center",
  fd: "column",

  "&:before": {
    background: "radial-gradient(circle,rgba(2,0,36,0)0,$colors$gray1 100%)",
    position: "absolute",
    content: "",
    zIndex: 2,
    width: "100%",
    height: "100%",
    top: 0,
  },

  "&:after": {
    content: "",
    backgroundImage: "url(/grid.svg)",
    zIndex: -1,
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    opacity: 0.2,
    filter: "invert(1)",
    "@darkTheme": {
      filter: "unset",
    },
  },

  h1: {
    color: "$text",
    lineHeight: "0",
    letterSpacing: "-0.05em",
    fontWeight: "800",
    zIndex: 10,
  },
  span: {
    $$gradientTo: "#3b82f6",
    $$gradientFrom: "#ff1e56",
    $$gradientStops: "$$gradientTo, $$gradientFrom",
    lineHeight: "1",
    fontFamily: "$system",
    letterSpacing: "-0.05em",
    fontWeight: "800",
    zIndex: 10,
    display: "inline-block",
    backgroundClip: "text",
    backgroundImage: "linear-gradient(to right, $$gradientStops )",
    backgroundColor: "#3B82F6",
    color: "transparent",
    pr: "5px",
  },
  "& p": {
    color: "$typeFaceSecondary",
    fontWeight: "500",
    lineHeight: "1.25",
    letterSpacing: "-0.05em",
    fontSize: "$fontSizes$1",
    zIndex: 10,
  },
  "@tablet": {
    "h1, span": {
      fontSize: "$fontSizes$4",
    },
    "& p": {
      fontSize: "$fontSizes$7",
    },
  },
  "@phone": {
    "h1, span": {
      fontSize: "$fontSizes$4",
    },
    "& p": {
      fontSize: "$fontSizes$7",
    },
  },
});
