import './App.css';
import { Footer, Home, Navbar, Projects, Skills } from './containers';
import Preloader from './components/Preloader';
import { useState, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      // If the document is already loaded
      setLoading(false);
    } else {
      // Otherwise, add an event listener
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

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
