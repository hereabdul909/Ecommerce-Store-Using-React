import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sliderdata from './components/Home/SliderData';
import Cart from './components/Cart/Cart';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import MenCards from './components/MenCards/MenCards';
import WomenCards from './components/WomenCards/WomenCards';
import Footer from './components/Footer/Footer';
function App() {
  const [cart  , setCart] = useState([])
  const handleClick = (item) => {
    setCart([...cart, item]);
  }
  return (
    <Router>
        <Navbar  size={cart.length}/>
        <Routes>
          <Route path="/" element={<Home slides={Sliderdata} />} />
          <Route path="/men" element={<MenCards handleClick={handleClick}/>} />
          <Route path="/women" element={<WomenCards  handleClick={handleClick}/>} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
