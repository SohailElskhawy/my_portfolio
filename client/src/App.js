import './App.css';
import { Footer, Home, Navbar, Projects, Skills } from './containers';
import Preloader from './components/Preloader';
import { useState, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false);
    });

    return () => {
      window.removeEventListener('load', () => {
        setLoading(false);
      });
    }
  }, [loading]);
  
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <ScrollToTop />
      <Footer />

      {loading && <Preloader />}
      
    </div>
  );
}

export default App;
