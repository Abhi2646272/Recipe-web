import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
// import Dashboard from './Dashboard';
// import { DarkModeProvider } from './DarkModeContext';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
 function App() {
  return (
  
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/recipe' element={<Recipe/>}/>
        
      </Routes>
      <Footer/>
     
    </BrowserRouter>
   
  );
}

export default App;
