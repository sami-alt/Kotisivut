
import { Route, Routes } from "react-router-dom"
import Frontpage from "./Pages/Home/main"
import Cv from "./Pages/CV/main"
import Tyokokemus from "./Pages/Experience/main"
import Koulutus from "./Pages/Education/main"
import Layout from "./Pages/Layout/main"

function App() {
  return (
    <>
      <header>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Frontpage />} />
            <Route path='/Experience' element={<Tyokokemus />} />
            <Route path='/Education' element={<Koulutus />} />
            <Route path='/CV' element={<Cv />} />
          </Route>
        </Routes>
      </header>
      <main>
        
      </main >
      <footer>

      </footer>
    </>
  )
}

export default App
