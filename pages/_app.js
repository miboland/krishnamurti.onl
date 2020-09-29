import { Global, css } from "@emotion/core";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { DefaultSeo } from "next-seo";
import React from "react";
import seo from "../seo.config";
import { ProvideSearch } from "../utils/search";

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <ColorModeProvider value="dark">
      <CSSReset />
      <Global
        styles={css`
          #__next {
            height: 100%;
          }
        `}
      />
      <ProvideSearch>
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </ProvideSearch>
    </ColorModeProvider>
  </ThemeProvider>
);
