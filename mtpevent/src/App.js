import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/home.js';
import Partner from './pages/partner.js'
import Partners from './pages/partners.js'
import Prestations from './pages/prestations.js'
function App() {

  console.log(Image);
  return (
    <div className="App">
      <NavBar />
      <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/prestations' element={<Prestations />}/>
            <Route path='/partenaires' element={<Partners />}/>
            <Route path='/partenaires/:id' element={<Partner />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
