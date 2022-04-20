import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/home'
import AboutUs from './pages/aboutUs'
import Contacts from './pages/contacts'
import Services from './pages/services'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<AboutUs />} />
          <Route path="/Contatos" element={<Contacts />} />
          <Route path="/Servicos" element={<Services />} />
        </Routes>
    </Router>
  )
}

export default App
