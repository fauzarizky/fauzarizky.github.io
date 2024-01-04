import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Link, SimpleGrid, Stack, Text, useColorMode } from "@chakra-ui/react";
import portfolio1 from "../images/mac-view-median-web.png";
import portfolio2 from "../images/mac-view-project-2.png";
import portfolio3 from "../images/web-advice-quote.png";
import portfolio4 from "../images/mac-view-weather-app.png";
import portfolio5 from "../images/desktop-todo-app.png";
import portfolio6 from "../images/bincang-app-desktop.png";

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
                  <Heading size="md">Publishing Platform Web App</Heading>
                  <Text>Creating a static publishing platform using HTML and Tailwindcss only.</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="https://fauzarizky.github.io/median-web/" isExternal>
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
                  <Heading size="md">Event Management Web App</Heading>
                  <Text>
                  Developed homepage with navigation, footer, and event filtering feature using React JS and ChakraUI. 
                  use user123 as username,and user123 as password.(Group Project)
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
                  <Heading size="md">Advice & Quote Web App</Heading>
                  <Text>Design and develop a website that generates customized quotes and advice using existing APIs.</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="https://fauzarizky.github.io/advice-quote/" isExternal>
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
                  <Heading size="md">Weather Web App</Heading>
                  <Text>Create a weather app using HTML, JS, and Tailwindcss that utilizes the OpenWeather API.</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="https://fauzarizky.github.io/weather-app/" isExternal>
                  <Button variant="solid" color={"#ffd803"} bgColor={"#272343"} _hover={{color: '#272343', bgColor: '#ffd803'}}>
                    Visit
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card maxW="sm" minH={'550px'}>
              <CardBody>
                <Image src={portfolio5} alt="Fifth Project" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">ToDo List Web App</Heading>
                  <Text>Develop a ToDo List application using ReactJS and ChakraUI. Utilize local browser storage to save data.</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="https://fauzarizky.github.io/todo-app/" isExternal>
                  <Button variant="solid" color={"#ffd803"} bgColor={"#272343"} _hover={{color: '#272343', bgColor: '#ffd803'}}>
                    Visit
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card maxW="sm" minH={'550px'}>
              <CardBody>
                <Image src={portfolio6} alt="Fifth Project" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Bincang Web App</Heading>
                  <Text>Develop a social media application using ReactJS, Redux, Redux Toolkit, and ChakraUI. Utilize both Redux for state management and local browser storage to persist data.</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href="https://fauzarizky.github.io/bincang-app/" isExternal>
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
