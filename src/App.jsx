import Contact from "./components/Header/Contact"
import NavBar from "./components/Header/NavBar"
import Schools from "./components/Schools/Schools"
import Hero from "./components/Slider/Hero"
import Streams from "./components/Stream/Streams"
import Search from "./components/search/Search"
import SelectStream from "./components/select/SelectStream"

function App() {


  return (
    <div>
        <Contact/>
        <NavBar/>
        <Search/>
        <Hero/>
        <Schools/>
        <Streams/>
        <SelectStream/>
    </div>
  )
}

export default App
