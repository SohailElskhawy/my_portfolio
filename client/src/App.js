import './App.css';
import { Footer, Home, Navbar, Projects, Skills } from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
