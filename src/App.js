import logo from './logo.svg';
//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
//styles
import './App.css';
import About from './components/About/About';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <About />
      <PracticeAreas />
      <Testimonials />
    </main>
  );
}

export default App;
