import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Portafolio" element={<Home />} />
        <Route path="/Portafolio/home" element={<Home />} />
        <Route path="/Portafolio/projects" element={<Projects />} />
        <Route path="/Portafolio/about" element={<About />} />
        <Route path="/Portafolio/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
