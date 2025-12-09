import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Kasa</h1>
        <nav className="nav">
          <a href="/">Accueil</a>
          <a href="/about">À Propos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;