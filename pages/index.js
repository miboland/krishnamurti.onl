/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Text, Flex, Spinner } from "@chakra-ui/core";
import { useSearch } from "../utils/search";
import App from "../components/App";
import MediaCard from "../components/MediaCard";
import EmptySearch from "../components/EmptySearch";
import { createGlossary } from "../utils/glossary";

const HomePage = () => {
  const { alcoholTypeFilters, search } = useSearch();

  const glossary = createGlossary();
  const matchesSearch = (epub) =>
    epub.title.toLowerCase().includes(search.toLowerCase());
  // const matchesAlcoholType = (deal) =>
  //   alcoholTypeFilters.includes(deal.alcoholType);
  const filteredMedia = glossary.filter(matchesSearch);

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
          filteredMedia.map((epub) => <MediaCard key={epub.title} {...epub} />)
        ) : (
          <EmptySearch />
        )}
        <Flex justify="flex-end" as="i" color="gray.500">
          {`Showing ${filteredMedia.length} out of ${glossary.length} results`}
        </Flex>
        <Flex mt={8} display={["block", "none", "none", "none"]}></Flex>
      </>
    </App>
  );
};

export default HomePage;
