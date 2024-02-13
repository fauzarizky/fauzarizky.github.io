/* eslint-disable react/prop-types */
import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Link, SimpleGrid, Stack, Text, useColorMode } from "@chakra-ui/react";
import { LIST_PROJECTS } from "../constants/data";

export default function Projects(props) {
  const { colorMode } = useColorMode();

  const color = colorMode === "dark" ? "#ffd803" : "#272343";
  return (
    <div data-aos="fade-up">
      <Box id={`${props.id}`} minH={"93vh"} display={"flex"} flexDir={"column"} justifyContent={"center"} style={{ fontFamily: "Roboto Mono, monoscope" }} mb={{ base: "20px", md: "20px", lg: 0 }}>
        <Heading textAlign={"center"} textDecor={"underline"} color={color} mt={{ base: "40px", md: 0 }}>
          Projects
        </Heading>
        <Box mt={"20px"}>
          <SimpleGrid templateColumns="repeat(3, 1fr)" spacing={"10"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={{ base: "column", md: "row" }} flexWrap={"wrap"} mb={"15px"}>
            {LIST_PROJECTS.map((project) => (
              <Card key={project.id} maxW="sm" minH={"550px"}>
                <CardBody>
                  <Image src={project.img} alt={project.title} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{project.title}</Heading>
                    <Text>{project.desc}</Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Link href={project.link} isExternal>
                    <Button variant="solid" color={"#ffd803"} bgColor={"#272343"} _hover={{ color: "#272343", bgColor: "#ffd803" }}>
                      Visit
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}
