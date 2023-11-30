import logo from './logo.svg';
//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
//styles
import './App.css';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
