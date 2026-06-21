import './App.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Plans from './components/Plans/Plans';
import Recipes from './components/Recipes/Recipes';
import Testimonials from './components/Testimonials/Testimonials';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <Hero />

      <About />

      <Recipes />

      <Plans />

      <Testimonials />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;