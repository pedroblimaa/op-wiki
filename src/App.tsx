import firebaseApi from './config/firebaseConfig'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Characters from './pages/Characters'
import AkumaNoMi from './pages/AkumaNoMi'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/akuma_no_mi" element={<AkumaNoMi />} />
      </Routes>
    </Router>
  )
}

export default App
