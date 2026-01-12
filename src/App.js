import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Navbar/Layout.jsx";
import Home from "./Home/home.jsx";
import { AnimatePresence } from "framer-motion";
import Skills from "./Skills/Skills.jsx";
import Projects  from "./projects/projects.jsx"

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
