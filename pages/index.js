/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Flex } from "@chakra-ui/core";

import { useSearch } from "../utils/search";
import App from "../components/App";
import MediaCard from "../components/MediaCard";
import EmptySearch from "../components/EmptySearch";

import { frontMatter as media } from "../pages/media/*.mdx";

const HomePage = () => {
  const { alcoholTypeFilters, search } = useSearch();

  const matchesSearch = (epub) =>
    epub.title.toLowerCase().includes(search.toLowerCase());
  // const matchesAlcoholType = (deal) =>
  //   alcoholTypeFilters.includes(deal.alcoholType);
  const filteredMedia = media.filter(matchesSearch);

  console.log(media);

  return (
    <App width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
      {/* <Text mb={2} fontSize="sm">
        {"Active "}
        <b>{dayOfWeek}</b>
        {" in "}
        <b>{"Des Moines"}</b>
      </Text> */}
      {/* {loading ? (
        <Flex pt={24} align="center" justify="center">
          <Spinner size="xl" label="Loading Deals" />
        </Flex>
      ) : ( */}
      <>
        {filteredMedia.length ? (
          filteredMedia.map((file) => <MediaCard key={file.title} {...file} />)
        ) : (
          <EmptySearch />
        )}
        <Flex justify="flex-end" as="i" color="gray.500">
          {`Showing ${filteredMedia.length} out of ${media.length} results`}
        </Flex>
        <Flex mt={8} display={["block", "none", "none", "none"]} />
      </>
    </App>
  );
};

export default HomePage;
