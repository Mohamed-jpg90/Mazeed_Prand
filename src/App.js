import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home2 from './componant/pages/Home2';
import Navebar from './componant/Navebar';
import Preloader from './componant/Preloader';
import Slide from './componant/Slide';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Products from './componant/pages/Products';
import Footer from './componant/Footer';


function App() {

  
useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Increase for slower scroll
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="App">
      <Router>
        <Preloader/>
        <Navebar />
        <Slide />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/Product" element={<Products />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
