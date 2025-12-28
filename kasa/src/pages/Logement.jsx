import { useParams } from 'react-router-dom';
import accommodationsData from '../data.json';
import '../style/Logement.css';

function Logement() {
  const { id } = useParams();
  
  // Trouver le logement directement (pas besoin de useState si vous n'avez pas de mise à jour)
  const logement = accommodationsData.find(item => item.id === id);

  // Si aucun logement n'est trouvé, afficher un message
  if (!logement) {
    return (
      <div className="error-message">
        <h2>Logement non trouvé</h2>
        <p>Le logement avec l'ID "{id}" n'existe pas.</p>
      </div>
    );
  }

  return (
    <main className="logement-main">
      {/* Simple image au lieu du carousel pour commencer */}
      <div className="logement-image">
        <img src={logement.pictures[0]} alt={logement.title} />
      </div>
      
      <section className="logement-info">
        <div className="logement-header">
          <div className="logement-title-section">
            <h1>{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="host-rating">
            <div className="host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className="rating">
              {/* Étoiles simples */}
              <span className="stars">
                {'★'.repeat(parseInt(logement.rating))}
                {'☆'.repeat(5 - parseInt(logement.rating))}
              </span>
            </div>
          </div>
        </div>
        
        <div className="details">
          <div className="description">
            <h3>Description</h3>
            <p>{logement.description}</p>
          </div>
          
          <div className="equipments">
            <h3>Équipements</h3>
            <ul>
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Logement;