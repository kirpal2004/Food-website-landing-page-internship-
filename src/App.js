import React from 'react';
import NavBar from './components/Navbar';
import Order from './components/Order';
import About from './components/About';
import Menu from './components/Menu';

import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './components/Review';

function App() {
  return (
    
 <>
      <NavBar style={{ background: "linear-gradient(135deg,rgb(15, 15, 14) 0%,rgb(246, 238, 238) 100%)" }} />
      <Order />
      <About />
      <Menu />
      <Review />
      <Contact />
      <Footer />
 </>
  );
}

export default App;