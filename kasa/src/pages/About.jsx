import '../style/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-banner"></div>
      
      <div className="about-collapse-container">
        <details className="collapse-section">
          <summary className="collapse-header">
            <h3>Fiabilité</h3>
            <span className="collapse-icon">▼</span>
          </summary>
          <div className="collapse-content">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </div>
        </details>
        
        <details className="collapse-section">
          <summary className="collapse-header">
            <h3>Respect</h3>
            <span className="collapse-icon">▼</span>
          </summary>
          <div className="collapse-content">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </details>
        
        <details className="collapse-section">
          <summary className="collapse-header">
            <h3>Service</h3>
            <span className="collapse-icon">▼</span>
          </summary>
          <div className="collapse-content">
            <p>La qualité du service est au coeur de notre engagement envers nos clients. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
          </div>
        </details>
        
        <details className="collapse-section">
          <summary className="collapse-header">
            <h3>Sécurité</h3>
            <span className="collapse-icon">▼</span>
          </summary>
          <div className="collapse-content">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </div>
        </details>
      </div>
    </div>
  );
}

export default About;