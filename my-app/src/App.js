import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import AboutMe from "./Components/About-me/About-me";
import InfoGoals from "./Components/Info-Goals/Info-Goals";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutMe />
      <InfoGoals />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
