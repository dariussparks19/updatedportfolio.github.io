import React from "react";
//global style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import MyProjects from "./pages/Projects";
import ProjectDetail from './pages/ProjectDetail';
//Router
import {Switch, Route, useLocation} from 'react-router-dom';
//animation
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  console.log(location);


  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs/>
          </Route>
            <Route path="/projects" exact>
          <MyProjects/>
          </Route>
          <Route path="/projects/:id">
            <ProjectDetail/>
          </Route>
            <Route path="/contact">
          <Contact/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
