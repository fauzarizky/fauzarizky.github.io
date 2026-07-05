import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./assets/index.css";

function App() {
  return (
    <Navbar>
      <Home id="home" />
      <About id="about" />
      <TechStack id="techstack" />
      <Projects id="projects" />
      <Footer />
    </Navbar>
  );
}

export default App;
