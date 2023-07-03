import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTop";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <Home />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
