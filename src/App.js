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


console.log(process.env.REACT_APP_LINK);
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
            <Route exact path='/' element={<Home/>}/>  
            <Route path='/about' element={<About/>}/>
            <Route path='/admin' element={<Admin/>}/>         
          </Routes>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
