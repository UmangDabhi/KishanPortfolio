import React from "react";
import Splash from "./pages/splash";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Posters from "./pages/posters/posters";
import Projects from "./pages/projects/projects";
import ProjectDetails from "./pages/projects/projectDetails";
import About from "./pages/aboutme";
import UploadPosters from "./pages/posters/uploadPosters";
import UploadProjects from "./pages/projects/uploadProjects";
import DeletePosters from "./pages/posters/deletePosters";
import UploadPrototypes from "./pages/prototypes/uploadPrototype";
import Prototypes from "./pages/prototypes/prototypes";
import DeleteProjects from "./pages/projects/deleteProjects";
import DeletePrototype from "./pages/prototypes/deletePrototype";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Posters" element={<Posters />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/project/details" element={<ProjectDetails />} />
          <Route path="/prototypes" element={<Prototypes />} />
          <Route path="/AboutMe" element={<About />} />
          <Route path="/UploadPosters" element={<UploadPosters />} />
          <Route path="/deletePosters" element={<DeletePosters />} />
          <Route path="/UploadProjects" element={<UploadProjects />} />
          <Route path="/deleteProject" element={<DeleteProjects />} />
          <Route path="/UploadPrototypes" element={<UploadPrototypes />} />
          <Route path="/deletePrototype" element={<DeletePrototype />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
