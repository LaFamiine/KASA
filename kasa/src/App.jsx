import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';  
import Footer from './Footer';  
import Acceuil from './Acceuil.jsx'; 
import Card from './Card.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Acceuil" element={<Acceuil />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;