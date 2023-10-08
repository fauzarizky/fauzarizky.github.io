import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Link, SimpleGrid, Stack, Text, useColorMode } from "@chakra-ui/react";
import portfolio1 from "../images/mac-view.png";
import portfolio2 from "../images/mac-view-project-2.png";
import portfolio3 from "../images/web-advice-quote.png";
import portfolio4 from "../images/mac-view-weather-app.png";

export default function Projects(props) {
  const { colorMode } = useColorMode();

  const color = colorMode === "dark" ? "#ffd803" : "#272343";
  return (
    <div data-aos="fade-up">
      <Box id={`${props.id}`} minH={"93vh"} display={"flex"} flexDir={"column"} justifyContent={"center"} style={{ fontFamily: "Roboto Mono, monoscope" }} mb={{base:'20px', md: '20px', lg: 0}}>
        <Heading textAlign={"center"} textDecor={"underline"} color={color} mt={{base: '40px', md: 0}}>
          Projects
        </Heading>
        <Box mt={"20px"}>
          <SimpleGrid templateColumns="repeat(3, 1fr)" spacing={"10"} display={"flex"} justifyContent={"center"} alignItems={'center'} flexDir={{base: 'column', md: 'row'}} flexWrap={'wrap'} mb={'15px'}>
            <Card maxW="sm" minH={'550px'}>
              <CardBody>
                <Image src={portfolio1} alt="First Project" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Web Portfolio HTML + CSS</Heading>
                  <Text>This is my first project, creating a simple web portfolio using HTML and CSS only.</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="https://fauzarizky.github.io/portfolio/" isExternal>
                  <Button variant="solid" color={"#ffd803"} bgColor={"#272343"} _hover={{color: '#272343', bgColor: '#ffd803'}}>
                    Visit
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card maxW="sm" minH={'550px'}>
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
                  <Button variant="solid" color={"#ffd803"} bgColor={"#272343"} _hover={{color: '#272343', bgColor: '#ffd803'}}>
                    Visit
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card maxW="sm" minH={'550px'}>
              <CardBody>
                <Image src={portfolio3} alt="Third Project" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Advice & Quote Web</Heading>
                  <Text>My third project is to design and develop a website that generates customized quotes and advice using existing APIs. </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="https://fauzarizky.github.io/advice-quote/">
                  <Button variant="solid" color={"#ffd803"} bgColor={"#272343"} _hover={{color: '#272343', bgColor: '#ffd803'}}>
                    Visit
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card maxW="sm" minH={'550px'}>
              <CardBody>
                <Image src={portfolio4} alt="Fourth Project" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Weather App</Heading>
                  <Text>Create a simple weather application that uses the API from OpenWeather.</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="https://fauzarizky.github.io/weather-app/">
                  <Button variant="solid" color={"#ffd803"} bgColor={"#272343"} _hover={{color: '#272343', bgColor: '#ffd803'}}>
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
