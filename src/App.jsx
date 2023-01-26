import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TechStack from './pages/TechStack'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      
      <About />
      <Projects /> 
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
