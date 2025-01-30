import { Box, ButtonGroup, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useColorMode } from "./ui/color-mode";

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Box w={"100%"} as="footer" py={{ base: "8", md: "10" }} px={{ base: "4", md: "8" }} bg={colorMode === "light" ? "#272343" : "gray.900"} color={"#ffd803"}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Text fontSize={"40px"} fontWeight={"bold"}>
            rzky()
          </Text>
          <ButtonGroup variant="tertiary">
            <IconButton as="a" href="https://www.linkedin.com/in/fauzarizky" aria-label="LinkedIn" size={"lg"}>
              <FaLinkedin />
            </IconButton>
            <IconButton as="a" href="https://github.com/fauzarizky" aria-label="GitHub" size={"lg"}>
              <FaGithub />
            </IconButton>
            <IconButton as="a" href="https://behance.net/fauzarizky" aria-label="Twitter" size={"lg"}>
              <FaBehance />
            </IconButton>
          </ButtonGroup>
        </Stack>

        <Stack>
          <Text fontSize="md">Willing to apply in:</Text>
          <Stack direction="row" align="center">
            <FaLocationDot />
            <Text fontSize="md">Jakarta, Semarang, Indonesia</Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
