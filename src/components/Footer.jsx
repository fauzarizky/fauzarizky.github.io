import { Box, ButtonGroup, IconButton, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export default function Footer() {
  return (
    <Box w={"100%"} as="footer" py={{ base: "8", md: "10" }} px={{ base: "4", md: "8" }} bg={useColorModeValue("#272343", "gray.900")} color={"#ffd803"}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Text fontSize={"40px"} fontWeight={"bold"}>
            rzky()
          </Text>
          <ButtonGroup variant="tertiary">
            <IconButton as="a" href="https://www.linkedin.com/in/fauzarizky" aria-label="LinkedIn" icon={<FaLinkedin />} size={"lg"} />
            <IconButton as="a" href="https://github.com/fauzarizky" aria-label="GitHub" icon={<FaGithub />} size={"lg"} />
            <IconButton as="a" href="https://behance.net/fauzarizky" aria-label="Twitter" icon={<FaBehance />} size={"lg"} />
          </ButtonGroup>
        </Stack>

        <Stack>
          <Text fontSize="md" color="fg.subtle">
            Willing to apply in:
          </Text>
          <Stack direction="row" align="center">
            <FaLocationDot />
            <Text fontSize="md" color="fg.subtle">
              Jakarta, Semarang, Indonesia
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
