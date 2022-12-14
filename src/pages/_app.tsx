/* eslint-disable react/jsx-props-no-spreading */
import { globalCss, globalStyles, Providers } from "@root/config";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

import defaultSEOConfig from "../../next-seo.config";

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalCss(globalStyles)();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Providers>
        <DefaultSeo {...defaultSEOConfig} />
        <Component {...pageProps} />
      </Providers>
    </>
  );
};

export default MyApp;
