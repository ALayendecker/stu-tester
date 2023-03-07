import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavBar/index';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
//import ProjectCard from './components/pages/Projects/ProjectCard';
//import project from './project.json';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="wk13react-portfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/wk13react-portfolio/" element={<Home />} />
          <Route path="/wk13react-portfolio/about" element={<About />} />
          <Route path="/wk13react-portfolio/contact" element={<Contact />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/wk13react-portfolio/projects/*" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

