import Layout from "./Pages/Layout/main"
import Home from './Pages/Home/main'
import About from "./Pages/About/main"
import Portfolio from "./Pages/Portfolio/main"
import Education from "./Pages/Education/main";
import Skills from "./Pages/Skills/main"
import Experience from "./Pages/Experience/main";
import Cv from "./Pages/CV/main";
import Contact from "./Pages/Contact/main";
import Demos from "./Pages/Demos/main";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/CV' element={<Cv />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path='/Demos' element={<Demos/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
