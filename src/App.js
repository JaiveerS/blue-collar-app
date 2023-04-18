import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Services" element={<Services />} />
          <Route exact path="Projects" element={<Projects />} />
          <Route exact path="Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
