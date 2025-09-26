import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Resources from "./pages/Resorces";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import News from "./pages/News";
import Alumni from "./pages/Alumni";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />``
        <Route path="/news" element={<News />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </>
  );
}

export default App;
