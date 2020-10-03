import React from "react";
import { parseISO, format } from "date-fns";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Box,
} from "@chakra-ui/core";

import App from "../components/App";

const editUrl = (slug) =>
  `https://github.com/miboland/krishnamurti.onl/edit/master/pages/media/${slug}.mdx`;

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace("media/", "")
    .replace(".mdx", "");

  return ({ children }) => {
    const { colorMode } = useColorMode();
    const textColor = {
      light: "gray.700",
      dark: "gray.400",
    };

    return (
      <App>
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxWidth="700px"
            w="100%"
            mt={8}
            mr={2}
            ml={2}
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>
            <Heading as="h3" size="lg">
              {`by ${frontMatter.author}`}
            </Heading>
            <Text fontSize="sm" color={textColor[colorMode]} mt={2}>
              {"Published "}
              {format(parseISO(frontMatter.published), "yyyy")}
            </Text>
            <Text fontSize="sm" color="gray.500" mt={1}>
              {`${(frontMatter.readingTime.time / 3.6e6).toFixed()}hr read`}
            </Text>
          </Flex>
          {children}
          <Box>
            <Link href={editUrl(slug)} isExternal>
              {"Edit on GitHub"}
            </Link>
          </Box>
        </Stack>
      </App>
    );
  };
};
