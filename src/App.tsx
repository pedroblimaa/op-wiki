import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faFloppyDisk } from '@fortawesome/free-regular-svg-icons'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import Home from './pages/Home'
import CharactersPage from './pages/CharactersPage'
import AkumaNoMiPage from './pages/AkumaNoMiPage'
import Navbar from './components/Navbar'
import Details from './pages/Details'
import CrewBuilder from './pages/CrewBuilder'

library.add(faTrashAlt, faFloppyDisk, faArrowAltCircleLeft)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/akuma_no_mi" element={<AkumaNoMiPage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/crew_builder" element={<CrewBuilder />} />
      </Routes>
      <Navbar />
    </Router>
  )
}

export default App
