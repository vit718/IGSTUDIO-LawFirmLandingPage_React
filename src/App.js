import logo from './logo.svg';
//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
//styles
import './App.css';
import About from './components/About/About';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import Testimonials from './components/Testimonials/Testimonials';
import Team from './components/Team/Team';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <About />
      <PracticeAreas />
      <Testimonials />
      <Team />
    </main>
  );
}

export default App;
