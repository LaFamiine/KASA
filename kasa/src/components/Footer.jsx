import '../style/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
          <div className="footer-logo-container">
          <img 
            src="\public\img\LOGO bas de page.png"
            alt="Kasa" 
            className="footer-logo-image"
          />
        </div>
        <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;