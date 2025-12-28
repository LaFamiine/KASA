import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';  
import Footer from './components/Footer';  
import Acceuil from './pages/Acceuil.jsx'; 
import Logement from './pages/Logement.jsx';
import About from './pages/About.jsx';
import Error404 from './pages/Error.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;