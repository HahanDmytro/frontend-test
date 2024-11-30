import './App.css';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>          
          </Routes>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
