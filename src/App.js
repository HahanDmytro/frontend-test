import './App.css';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import { authActions } from './store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Admin from './components/admin/Admin';
import DonatePage from './components/donate/DonatePage';
import GameEmbed from './components/games/GameEmbed';


const link = process.env.REACT_APP_LINK;
function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home link={link}/>}/> 
            <Route path='/game' element={<GameEmbed/>}/>
            <Route path='/donate' element={<DonatePage link={link}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/admin' element={<Admin link={link}/>}/>         
          </Routes>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
