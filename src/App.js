import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./components/Home/Projects/Projects";
import Resume from "./components/Home/Resume/Resume";
import AboutMe from "./components/Home/AboutMe/AboutMe";
import Contract from "./components/Home/Contract/Contract";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/contract">
            <Contract />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
