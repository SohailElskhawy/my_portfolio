import './App.css';
import { Footer, Home, Navbar, Projects, Skills } from './containers';
import Preloader from './components/Preloader';
import { useState, useEffect } from 'react';

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
      <Footer />

      {loading && <Preloader />}
      
    </div>
  );
}

export default App;
