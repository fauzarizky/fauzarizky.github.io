/* eslint-disable react/prop-types */
import { Box, Button, Card, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { LIST_PROJECTS } from "../constants/data";
import { motion } from "framer-motion";
import { useColorMode } from "./ui/color-mode";
import MultipleItemsSlider from "./Slider";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const CustomCard = (props) => {
  return (
    <Card.Root maxW="sm" minH={"550px"} mb={"10px"} borderRadius={"none"}>
      <Card.Body>
        <Image src={props.img} alt={props.title} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.title}</Heading>
          <Text>{props.desc}</Text>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Link href={props.link} isExternal>
          <Button variant="solid" color={"#ffd803"} bgColor={props.colorMode === "dark" ? "gray.900" : "#272343"} _hover={{ color: "#272343", bgColor: "#ffd803" }}>
            Visit
          </Button>
        </Link>
      </Card.Footer>
    </Card.Root>
  );
};

export default function Projects(props) {
  const { colorMode } = useColorMode();

  const color = colorMode === "dark" ? "#ffd803" : "#272343";
  return (
    <div data-aos="fade-up">
      <Box id={`${props.id}`} minH={"93vh"} display={"flex"} flexDir={"column"} justifyContent={"center"} style={{ fontFamily: "Roboto Mono, monoscope" }} mb={{ base: "20px", md: "20px", lg: 0 }}>
        <Heading textAlign={"center"} textDecor={"underline"} color={color} mt={{ base: "40px", md: 0 }} fontSize={"40px"} mb={"5px"}>
          Projects
        </Heading>
        <Box mt={"20px"}>
          <Box display={"flex"} justifyContent={"center"} mb={"50px"}>
            <Box w={"90%"}>
              <MultipleItemsSlider>
                {LIST_PROJECTS.map((project, i) => (
                  <motion.div key={project.id} variants={variants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: i * 0.25, ease: "easeInOut" }} data-aos="flip-left">
                    <CustomCard img={project.img} title={project.title} desc={project.desc} link={project.link} colorMode={colorMode} />
                  </motion.div>
                ))}
              </MultipleItemsSlider>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
