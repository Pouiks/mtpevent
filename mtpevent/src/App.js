import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/home.js';
import Partner from './pages/partner.js'
import Partners from './pages/partners.js'
function App() {

  console.log(Image);
  return (
    <div className="App">
      <NavBar />
      <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/partenaires' element={<Partners />}/>
            <Route path='/partenaires/:id' element={<Partner />}/>
      </Routes>
    </div>
  );
}

export default App;
