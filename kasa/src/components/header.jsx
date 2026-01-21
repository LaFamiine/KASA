import { Link } from 'react-router-dom';
import '../style/header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img 
            src="/public/img/LOGO_MOBILE.png"// Chemin vers votre logo
            className="logo"
          />
        </Link>
        <nav className="nav">
          <a href="/">Accueil</a>
          <a href="/about">À Propos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;