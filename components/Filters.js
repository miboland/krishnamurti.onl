import {
  useColorMode,
  Box,
  Text,
  Stack,
  CheckboxGroup,
  Checkbox,
  Select,
  Input,
  Image,
  Flex,
  Link,
} from "@chakra-ui/core";

import { useSearch } from "../utils/search";

const Filters = (props) => {
  const { colorMode } = useColorMode();
  const { topicFilters, onChangeDayOfWeek, onFilterTopic } = useSearch();
  const inputBg = { light: "#EDF2F7", dark: "gray.700" };

  return (
    <Stack spacing={8} mb={8} {...props}>
      <Box>
        <Text mb={2} fontWeight="bold">
          {"Publish Year"}
        </Text>
        <Input placeholder={"1969"} bg={inputBg[colorMode]} type={"number"}>
          {/* <option backgroundColor="#EDF2F7">Des Moines, IA</option> */}
        </Input>
      </Box>
      <Box>
        <Text mb={2} fontWeight="bold">
          {"Media Type"}
        </Text>
        <Select
          placeholder={"All Types"}
          onChange={onChangeDayOfWeek}
          bg={inputBg[colorMode]}
        >
          <option value="Biography">Biography</option>
          <option value="Interview">Interview</option>
          <option value="Journal">Journal</option>
          <option value="Seminar">Seminar</option>
        </Select>
      </Box>

      <Box>
        <Text mb={2} fontWeight="bold">
          {"Topic"}
        </Text>
        <CheckboxGroup
          onChange={onFilterTopic}
          spacing={2}
          variantColor="teal"
          value={topicFilters}
        >
          <Checkbox value="Education">Education</Checkbox>
          <Checkbox value="Loneliness">Loneliness</Checkbox>
          <Checkbox value="Love">Love</Checkbox>
          <Checkbox value="Religion">Religion</Checkbox>
          <Checkbox value="Thought">Thought</Checkbox>
          <Checkbox value="Time">Time</Checkbox>
          <Checkbox value="War">War</Checkbox>
        </CheckboxGroup>
      </Box>
      <Flex
        pos="fixed"
        zIndex={2}
        bottom="10"
        alignItems="center"
        alignSelf="center"
      >
        <Link href="https://boland.onl" isExternal>
          <Image src="boland.onl.png" alt="Michael Boland" size="35px"></Image>
        </Link>
      </Flex>
    </Stack>
  );
};

export default Filters;
