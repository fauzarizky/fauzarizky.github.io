import { Box, Heading, Icon, Image, Link, LinkBox, useColorMode } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImg from "../images/profile.png";

export default function Home(props) {
  const { colorMode } = useColorMode();

  const color = colorMode === "dark" ? "#ffd803" : "#272343";
  const colorHi = colorMode === "dark" ? "#272343" : "#ffd803";

  return (
    <div data-aos="fade-up">
      <Box id={`${props.id}`} h={"90vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={{base: 'column', md: 'row'}}>

        <Box h={"80vh"} w={{base: '80%', md: "55%", lg: '50%'}} display={"flex"} alignItems={"center"} flexDir={"column"} justifyContent={"center"}>
          <Box display={"flex"} alignItems={"start"} flexDir={"column"} w={{base: '100%', md: "80%"}}>
            <Box bgColor={colorHi} padding={"10px"}>
              <Heading fontSize={{base: '70px', sm: "90px", md: "80px", lg: '100px'}} color={color} style={{ fontFamily: "Roboto Mono, monoscope " }}>
                Hi,
              </Heading>
            </Box>
            <Heading fontSize={{base: '60px', sm: '65px', md: '70px', lg: '80px'}} color={color} style={{ fontFamily: "Roboto Mono, monoscope " }}>
              I'm Rizky
            </Heading>
            <Heading style={{ fontFamily: "Roboto Mono, monoscope " }} fontSize={{base: '30px', sm: '40px', md: '25px', lg: '30px'}}>
              <Typewriter
                options={{
                  strings: ["Frontend Web", "Backend Web", "Fullstack Web"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </Heading>
            <LinkBox flexDirection={"row"} mt={"10px"}>
              <Link href="https://www.linkedin.com/in/fauzarizky/" isExternal>
                <Icon as={FaLinkedin} boxSize={7} />
              </Link>
              <Link href="https://github.com/fauzarizky" isExternal>
                <Icon as={FaGithub} boxSize={7} marginStart={"10px"} />
              </Link>
            </LinkBox>
          </Box>
        </Box>

        <Box h={"80vh"} w={{md: '40%',lg:'50%'}} display={{base: 'none', md: 'flex'}} justifyContent={"center"} alignItems={'center'}>
          <Image src={profileImg} boxSize={{md: '450px', lg: '500px'}} objectFit={"contain"} />
        </Box>
      </Box>
    </div>
  );
}
