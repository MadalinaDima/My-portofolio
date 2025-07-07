import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./components/pagination/projects/projects";
import Header from "./components/header/Header";
import AboutMe from "./components/pagination/aboutMe/aboutMe";
import Section1 from "./components/section1/buttons/section1";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Section1 />
            </>
          }
        />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
