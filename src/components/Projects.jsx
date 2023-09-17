import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Link, SimpleGrid, Stack, Text, useColorMode } from "@chakra-ui/react";
import portfolio1 from "../images/mac-view.png";
import portfolio2 from "../images/mac-view-project-2.png";
import portfolio3 from "../images/COMING-SOON.png";

export default function Projects(props) {
  const { colorMode } = useColorMode();

  const color = colorMode === "dark" ? "#ffd803" : "#272343";
  return (
    <div data-aos="fade-up">
      <Box id={`${props.id}`} minH={"93vh"} display={"flex"} flexDir={"column"} justifyContent={"center"} style={{ fontFamily: "Roboto Mono, monoscope" }} mb={{base:'20px', md: '20px', lg: 0}}>
        <Heading textAlign={"center"} textDecor={"underline"} color={color} mt={{base: '10px', md: 0}}>
          Projects
        </Heading>
        <Box mt={"20px"}>
          <SimpleGrid templateColumns="repeat(3, 1fr)" spacing={"10"} display={"flex"} justifyContent={"center"} alignItems={'center'} flexDir={{base: 'column', md: 'row'}} flexWrap={'wrap'}>
            <Card maxW="sm" minH={'70vh'}>
              <CardBody>
                <Image src={portfolio1} alt="First Project" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Web Portfolio HTML + CSS</Heading>
                  <Text>This is my first project, creating a simple web portfolio using HTML and CSS only.</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="https://fauzarizky.github.io/portfolio/" isExternal>
                  <Button variant="solid" color={"#ffd803"} bgColor={"#272343"}>
                    Visit
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card maxW="sm" minH={'70vh'}>
              <CardBody>
                <Image src={portfolio2} alt="Second Project" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Event Management Web</Heading>
                  <Text>
                    This is my second project, I have created the homepage with navigation and footer using ReactJS and ChakraUI. Additionally, I've implemented a filtering feature for events based on type, user input, and location.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="https://resilient-yeot-af509a.netlify.app" isExternal>
                  <Button variant="solid" color={"#ffd803"} bgColor={"#272343"}>
                    Visit
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card maxW="sm" minH={'70vh'}>
              <CardBody>
                <Image src={portfolio3} alt="Third Project" borderRadius="lg" h={"25vh"} w={"100%"} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Coming Soon</Heading>
                  <Text>Third Project is under construction!</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="#">
                  <Button variant="solid" color={"#ffd803"} bgColor={"#272343"}>
                    Visit
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}
