import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';  
import Footer from './components/Footer';  
import Acceuil from './pages/Acceuil.jsx'; 
import Card from './components/Card';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/logement" element={<Card />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;