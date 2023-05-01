
import './App.css';
import Navbar from './navbar';

import About from './About';
import Home from './Home';
import Header from './Header';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <Header/>
    <Routes> 
      
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home/>}/>
     
    </Routes>
    </div>
  );
}

export default App;
