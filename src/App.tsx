import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Characters from './pages/Characters'
import AkumaNoMi from './pages/AkumaNoMi'
import Navbar from './components/Navbar'
import Details from './pages/Details'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/akuma_no_mi" element={<AkumaNoMi />} />
        <Route path="/description" element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App
