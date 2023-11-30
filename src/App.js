import logo from './logo.svg';
//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
//styles
import './App.css';
import About from './components/About/About';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <About />
    </main>
  );
}

export default App;
