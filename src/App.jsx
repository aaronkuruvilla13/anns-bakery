// src/App.jsx
import './App.css';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import Marquee   from './components/Marquee';
import About     from './components/About';
import Products  from './components/Products';
import Locations from './components/Locations';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Products />
      <Locations />
      <Contact />
      <Footer />
    </>
  );
}
