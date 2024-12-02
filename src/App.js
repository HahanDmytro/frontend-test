import './App.css';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Admin from './components/admin/Admin';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>  
            <Route path='/about' element={<About/>}/>
            <Route path='/admin' element={<Admin/>}/>         
          </Routes>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
