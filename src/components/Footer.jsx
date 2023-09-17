import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box w={"100%"} bg={useColorModeValue("gray.100", "gray.900")} h={"7vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Heading fontSize={"15px"} style={{ fontFamily: "Roboto Mono, monoscope" }}>
        Made by Rizky
      </Heading>
    </Box>
  );
}
