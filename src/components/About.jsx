/* eslint-disable react/prop-types */
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import profileImg from "../images/profile-pic.png";
import { EDUCATION } from "../constants/data";
import { useColorMode } from "./ui/color-mode";
import { TimelineConnector, TimelineContent, TimelineItem, TimelineRoot, TimelineTitle } from "./ui/timeline";

export default function About(props) {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "#ffd803" : "#272343";

  return (
    <Box data-aos="fade-up" id={`${props.id}`} minH={"100vh"} mx display={"flex"} mb={{ base: 5, md: 0 }} justifyContent={"center"} flexDir={"column"} alignItems={"center"} style={{ fontFamily: "Roboto Mono, monoscope" }}>
      <Heading style={{ textDecoration: "underline", fontFamily: "Roboto Mono, monoscope" }} textAlign={"center"} color={color} fontSize={"40px"} mb={"5px"}>
        About
      </Heading>

      <Box display={"flex"} w={"90%"} justifyContent={"center"} alignItems={"center"} flexDir={"column"} mt={"50px"}>
        <Box w={{ base: "100%", md: "40%" }} display={{ base: "flex", md: "none" }} alignItems={"center"} justifyContent={"center"} data-aos="fade-up-right" mb={"20px"}>
          <Image src={profileImg} boxSize={{ base: "300px", md: "400px" }} objectFit={"cover"} rounded={"full"} />
        </Box>

        <Stack w={{ base: "90%", md: "100%" }} bgColor={"#ffd803"} display={"flex"} alignItems={"center"} flexDir={"column"} spacing={{ base: "0", md: "20px" }} justifyContent={"center"} py={"25px"}>
          <Box w={"90%"} display={"flex"} flexDir={"column"} justifyContent={"center"}>
            <Heading color={"#272343"} fontWeight={"extrabold"} mb={"20px"} fontSize={{ sm: "25px", md: "30px", lg: "" }}>
              Background
            </Heading>
            <Text fontWeight={"medium"} color={"#272343"} fontSize={{ base: "13px", sm: "13px", md: "13px", lg: "15px" }}>
              A multimedia graduate from SMKN 11 Semarang, equipped with the skills and knowledge of full-stack web development thanks to my intensive training at Purwadhika job connector program. My passion for learning newfound expertise
              in web development makes me eager to contribute to impactful projects and launch my career in this exciting field.
            </Text>
          </Box>
        </Stack>
        <Box w={"90%"} display={"flex"} flexDir={"column"} justifyContent={"center"} mt={"50px"} gap={"10px"}>
          <Heading color={color} fontWeight={"extrabold"} mb={"20px"} fontSize={{ sm: "25px", md: "30px", lg: "" }}>
            Education
          </Heading>
          <TimelineRoot variant={"solid"} colorPalette={"yellow"}>
            {EDUCATION?.map((item) => (
              <TimelineItem key={item.id}>
                <TimelineConnector />
                <TimelineContent>
                  <TimelineTitle>{item.location}</TimelineTitle>
                  <Text textStyle={"sm"}>{item.title}</Text>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineRoot>
        </Box>
      </Box>
    </Box>
  );
}
