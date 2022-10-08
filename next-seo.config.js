/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextstarter-stitches",
  titleTemplate: "%s | nextstarter-stitches",
  defaultTitle: "nextstarter-stitches",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://nextstarter-stitches.sznm.dev",
  openGraph: {
    url: "https://nextstarter-stitches.sznm.dev",
    title: "nextstarter-stitches",
    description: "Next.js + Stitches + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextstarter-stitches**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextstarter-stitches.sznm.dev og-image",
      },
    ],
    site_name: "nextstarter-stitches",
  },
  twitter: {
    handle: "@ygorluiz",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
