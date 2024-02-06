/* eslint-disable react/prop-types */
import { Box, Heading, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import profileImg from "../images/profile.png";

export default function About(props) {
  const { colorMode } = useColorMode();

  const color = colorMode === "dark" ? "#ffd803" : "#272343";

  return (
    <div data-aos="fade-up">
      <Box id={`${props.id}`} h={"100vh"} display={"flex"} justifyContent={"center"} flexDir={"column"} alignItems={"center"} style={{ fontFamily: "Roboto Mono, monoscope" }}>
        <Box h={"10vh"} display={"flex"} alignItems={"center"}>
          <Heading style={{ textDecoration: "underline", fontFamily: "Roboto Mono, monoscope" }} textAlign={"center"} color={color}>
            About
          </Heading>
        </Box>

        <Box display={"flex"} h={"90vh"} w={"100%"} justifyContent={"center"} alignItems={"center"} flexDir={{ base: "column", md: "row" }}>
          <Box w={{ base: "80%", md: "40%" }} display={"flex"} alignItems={"center"} justifyContent={"center"} me={"30px"}>
            <Image src={profileImg} boxSize={{ base: "300px", md: "500px" }} objectFit={"contain"} />
          </Box>

          <Stack
            w={{ base: "90%", md: "50%" }}
            bgColor={"#ffd803"}
            h={"65vh"}
            borderRadius={"10px"}
            display={"flex"}
            alignItems={"center"}
            flexDir={"column"}
            spacing={{ base: "0", md: "20px" }}
            justifyContent={"center"}
            py={{ base: "15px", md: 0 }}>
            <Box h={"25vh"} w={"90%"} mt={{ base: "5px", sm: "10px", md: 0 }} display={"flex"} flexDir={"column"} justifyContent={"center"}>
              <Heading color={"#272343"} fontWeight={"extrabold"} mb={"5px"} fontSize={{ sm: "25px", md: "30px", lg: "" }}>
                Background
              </Heading>
              <Text fontWeight={"medium"} color={"#272343"} fontSize={{ base: "13px", sm: "13px", md: "13px", lg: "15" }}>
                A recent multimedia graduate from SMKN 11 Semarang, equipped with the skills and knowledge of a full stack web developer thanks to my intensive training at Purwadhika job connector program. My passion for learning,
                combined with my newfound expertise in web development, makes me eager to contribute to impactful projects and launch my career in this exciting field.
              </Text>
            </Box>

            <Box h={{ base: "25vh", md: "30vh" }} w={"90%"} display={"flex"} flexDir={"column"} justifyContent={"center"} mt={{ base: "10px", md: 0 }}>
              <Heading color={"#272343"} fontWeight={"extrabold"} mb={"5px"} fontSize={{ sm: "25px", md: "30px", lg: "" }}>
                Education
              </Heading>
              <Text fontWeight={"bold"} color={"#272343"} fontSize={{ base: "15px", md: "20px" }}>
                Purwadhika Digital Technology School
              </Text>
              <Text color={"#272343"} fontSize={{ base: "13px", sm: "15px", md: "15px" }}>
                Bootcamp, Fullstack Web Development (Final Score: 81.51)
              </Text>

              <Text fontWeight={"bold"} color={"#272343"} fontSize={{ base: "15px", md: "20px" }} mt={"10px"}>
                SMKN 11 Semarang
              </Text>
              <Text color={"#272343"} fontSize={{ base: "13px", sm: "15px", md: "" }}>
                Multimedia, Learning about Adobe Photoshop, Illustrator, Photography, and Videography
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
