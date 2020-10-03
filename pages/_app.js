import { Global, css } from "@emotion/core";
import { MDXProvider } from "@mdx-js/react";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { DefaultSeo } from "next-seo";
import React from "react";

import MDXComponents from "../components/MDXComponents";
import SEO from "../next-seo.config";
import { ProvideSearch } from "../utils/search";

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MDXProvider components={MDXComponents}>
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
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ProvideSearch>
      </ColorModeProvider>
    </MDXProvider>
  </ThemeProvider>
);
