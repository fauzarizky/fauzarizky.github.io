/* eslint-disable react/prop-types */
import { Box, Heading, Icon, Image, Link, LinkBox } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import profileImg from "../images/profile-pic.png";
import { TECH_STACK } from "../constants/data";
import { useColorMode } from "./ui/color-mode";

export default function Home(props) {
  const { colorMode } = useColorMode();

  const color = colorMode === "dark" ? "#ffd803" : "#272343";
  const colorHi = colorMode === "dark" ? "gray.900" : "#ffd803";

  return (
    <Box id={`${props.id}`} h={"90vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={{ base: "column", md: "row" }} data-aos="fade-up">
      <Box h={"80vh"} w={{ base: "80%", md: "55%", lg: "50%" }} display={"flex"} alignItems={"center"} flexDir={"column"} justifyContent={"center"}>
        <Box display={"flex"} alignItems={"start"} flexDir={"column"} gap={"30px"} w={{ base: "100%", md: "80%" }}>
          <Box display={"flex"} flexDir={"column"}>
            <Heading bgColor={colorHi} w={"fit-content"} fontSize={{ base: "70px", sm: "90px", md: "80px", lg: "120px" }} color={color} style={{ fontFamily: "Roboto Mono, monospace" }} p={2} lineHeight={"normal"}>
              Hi,
            </Heading>

            <Heading fontSize={{ base: "60px", sm: "65px", md: "70px", lg: "85px" }} color={color} style={{ fontFamily: "Roboto Mono, monoscope" }} lineHeight={"normal"}>
              I&apos;m Rizky
            </Heading>

            <Heading style={{ fontFamily: "Roboto Mono, monoscope " }} fontSize={{ base: "30px", sm: "40px", md: "25px", lg: "35px" }} color={colorMode === "dark" ? "#FFFFFF" : "#272343"}>
              <Typewriter
                options={{
                  strings: ["Frontend Web", "Backend Web", "Fullstack Web"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </Heading>
          </Box>

          <Box id="icon">
            <LinkBox id="social-media" flexDirection={"row"} mt={"10px"}>
              <Link href="https://www.linkedin.com/in/fauzarizky/" isExternal>
                <Icon as={FaLinkedin} boxSize={7} />
              </Link>
              <Link href="https://github.com/fauzarizky" isExternal>
                <Icon as={FaGithub} boxSize={7} marginStart={"10px"} />
              </Link>

              <Link href="https://behance.net/fauzarizky" isExternal>
                <Icon as={FaBehance} boxSize={7} marginStart={"10px"} />
              </Link>
            </LinkBox>

            <Box id="tech-stack" mt={"10px"}>
              <Box display={"flex"} flexWrap={"wrap"} gap={"5px"}>
                {TECH_STACK.map((Icon, index) => (
                  <Icon key={index} color={color} />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box h={"80vh"} w={{ md: "40%", lg: "50%" }} display={{ base: "none", md: "flex" }} justifyContent={"center"} alignItems={"center"}>
        <Image src={profileImg} boxSize={"400px"} objectFit={"cover"} rounded={"full"} />
      </Box>
    </Box>
  );
}
