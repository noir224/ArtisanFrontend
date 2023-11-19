import React from 'react'
import Navbar from './components/Navbar';
import Hero from'./components/Hero';
import Products from './components/Products';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
      <About></About>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
