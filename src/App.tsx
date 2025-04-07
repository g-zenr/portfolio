import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Home id="home" />
          <About id="about" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Contact id="contact" />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
