/** @jsx jsx */
import { useColorMode, Box } from "@chakra-ui/core";
import { jsx } from "@emotion/core";

const Boland = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 375 374.999991"
      fill="gray.500"
      h="23px"
      color={colorMode === "light" ? "#2D3748" : "#F7FAFC"}
      {...props}
    >
      <path d="M 187.5 18.75 C 280.554688 18.75 356.25 94.445312 356.25 187.5 C 356.25 280.554688 280.554688 356.25 187.5 356.25 C 94.445312 356.25 18.75 280.554688 18.75 187.5 C 18.75 94.445312 94.445312 18.75 187.5 18.75 M 187.5 0 C 83.945312 0 0 83.945312 0 187.5 C 0 291.054688 83.945312 375 187.5 375 C 291.054688 375 375 291.054688 375 187.5 C 375 83.945312 291.054688 0 187.5 0 Z M 187.5 0 " />
    </Box>
  );
};

export default Boland;
