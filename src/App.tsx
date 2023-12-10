
import { Route, Routes } from "react-router-dom"
import Frontpage from "./Pages/Home/main"
import Cv from "./Pages/CV/main"
import Tyokokemus from "./Pages/Experience/main"
import Koulutus from "./Pages/Education/main"
import Layout from "./Pages/Layout/main"
import Projects from "./Pages/Projects/main"
import Contact from "./Pages/Contact/main"
import Skills from "./Pages/Skills/main"


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Frontpage />} />
            <Route path='/Experience' element={<Tyokokemus />} />
            <Route path='/Education' element={<Koulutus />} />
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/CV' element={<Cv />} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path='/Skills' element={<Skills/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
