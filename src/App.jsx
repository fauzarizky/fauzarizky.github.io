import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "./components/Footer";
import "./assets/index.css";
import { Box } from "@chakra-ui/react";

AOS.init();

function App() {
  return (
    <>
      <Navbar>
        <Box overflow={"hidden"}>
          <Home id="Home" />
        </Box>
        <About id="About" />
        <Projects id="Projects" />
        <Footer />
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;500&display=swap" />
        </Helmet>
      </Navbar>
    </>
  );
}

export default App;
