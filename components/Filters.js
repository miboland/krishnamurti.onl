import {
  useColorMode,
  Box,
  Text,
  Stack,
  CheckboxGroup,
  Checkbox,
  Select,
  Input,
  IconButton,
  Flex,
  Link,
} from "@chakra-ui/core";

import { useSearch } from "../utils/search";
import Github from "../icons/Github";
import Boland from "../icons/Boland";

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
        <Input
          placeholder={"1969"}
          bg={inputBg[colorMode]}
          type={"number"}
        ></Input>
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
      <Flex mt={50} alignItems="center" alignSelf="center">
        <Link
          href="https://github.com/miboland/krishnamurti.onl"
          title="GitHub"
          isExternal
        >
          <IconButton
            aria-label="GitHub"
            icon={Github}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href="https://boland.onl" title="Boland" isExternal>
          <IconButton
            aria-label="Boland"
            icon={Boland}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
      </Flex>
    </Stack>
  );
};

export default Filters;
