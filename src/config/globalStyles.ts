const globalCss = {
  "*, *:before, *:after ": {
    "box-sizing": "border-box",
  },
  body: {
    background: "$background",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTextSizeAdjust: "100%",
  },
  "body.loading *": {
    transition: "none !important",
  },
  svg: {
    display: "block",
    verticalAlign: "middle",
  },
  "pre, code": {
    margin: 0,
    fontFamily: "$fonts$mono",
  },
  "#__next": {
    position: "relative",
    zIndex: 0,
  },
  ".light-theme [data-hide='dark'], .dark-theme [data-hide='light']": {
    display: "none",
  },
};

const globalRoot = {
  "--width-1_3": "33.333333%",
  "--width-2_3": "66.666667%",
  "--width-1_4": "25%",
  "--width-2_4": "50%",
  "--width-3_4": "75%",
  "--width-1_5": "20%",
  "--width-2_5": "40%",
  "--width-3_5": "60%",
  "--width-4_5": "80%",
  "--width-1_12": "8.33333333%",
  "--width-2_12": "16.66666667%",
  "--width-3_12": "25%",
  "--width-4_12": "33.33333333%",
  "--width-5_12": "41.66666667%",
  "--width-6_12": "50%",
  "--width-7_12": "58.33333333%",
  "--width-8_12": "66.66666667%",
  "--width-9_12": "75%",
  "--width-10_12": "83.33333333%",
  "--width-11_12": "91.66666667%",
  "--width-full": "100%",
};

const globalStyles = {
  ":root": {
    ...globalRoot,
  },
  ...globalCss,
};

export { globalStyles };
