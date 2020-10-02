/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useEffect, useRef } from "react";
import { Text, Flex, Spinner } from "@chakra-ui/core";

import App from "../../components/App";
import { useRouter } from "next/router";
import { ReactReader, EpubView } from "react-reader";
import { createGlossary } from "../../utils/glossary";
import "epubjs";

const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const ref = useRef();

  const [location, setLocation] = useState(null);

  return (
    <App width="full" maxWidth="auto">
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "auto",
        }}
      >
        {slug && (
          <ReactReader
            ref={ref}
            url={`/epubs/${slug}.epub`}
            location={location ? location : null}
            locationChanged={(e) => setLocation(e)}
            epubOptions={{
              manager: "continuous",
              flow: "scrolled",
            }}
          />
        )}
      </div>
    </App>
  );
};

export default SlugPage;
