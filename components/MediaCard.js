import React from "react";
import {
  useColorMode,
  Box,
  Divider,
  Text,
  Flex,
  Stack,
  Image,
  IconButton,
  Link,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/core";
import NextLink from "next/link";
import StarRatingComponent from "react-star-rating-component";

import Goodreads from "../icons/Goodreads";

const MediaCard = ({
  title,
  published,
  summary,
  __resourcePath,
  goodreads,
  cover,
}) => {
  const { colorMode } = useColorMode();

  const slug = __resourcePath.replace("media/", "").replace(".mdx", "");

  return (
    <Box
      borderWidth="1px"
      borderRadius={8}
      p={1}
      mb={2}
      pt={2}
      pb={2}
      pl={2}
      backgroundColor={colorMode === "light" ? "white" : "gray.800"}
    >
      <Flex>
        <Link href={`/media/${slug}`} passHref>
          <Image
            alignSelf="top"
            mr={4}
            src={`/covers/${cover}`}
            maxH={[0, 0, 0, 200]}
          />
        </Link>

        <Stack ml={3} mt={2} mb={2} mr={2}>
          <Box>
            <Link href={`/media/${slug}`}>
              <Text fontSize="xl" fontWeight="semibold" lineHeight="short">
                {title}
              </Text>
            </Link>
            <Flex>
              <StarRatingComponent
                name="rating"
                starCount={5}
                value={4}
                edit={false}
              />
              <Link ml={3} href={goodreads} title="Goodreads" isExternal>
                <IconButton
                  aria-label="Goodreads"
                  icon={Goodreads}
                  size="xs"
                  color="gray.500"
                  variant="ghost"
                />
              </Link>
            </Flex>
          </Box>
          <Divider width="150px" />
          <Text color="gray.400">
            {"Published "}
            {published}
          </Text>
          <Text fontSize="sm" fontWeight="regular" lineHeight="short" mr={4}>
            {summary}
          </Text>
          {/* <AccordionItem style={{ border: "none" }} ml={-4}>
            <AccordionHeader width="100px">
              <Box flex="1" textAlign="left" fontSize="sm">
                Details
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel fontSize="sm" pb={4}>
              {details}
            </AccordionPanel>
          </AccordionItem> */}
        </Stack>
      </Flex>
    </Box>
  );
};

export default MediaCard;
