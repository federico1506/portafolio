import NavBar from "./components/NavBar"
import About from "./components/About"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Presentation from "./components/Presentation"

function App() {
  return (
    <div>
      <Presentation />
      <NavBar/>
      <About/>
      <Projects/>
      <Education />
      <Contact />
    </div>
  )
}

export default App
