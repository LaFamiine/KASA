import { useParams } from "react-router-dom";
import accommodationsData from "../data.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import { Link } from "react-router-dom";
import "../style/Logement.css";

function Logement() {
  const { id } = useParams();

  const logement = accommodationsData.find((item) => item.id === id);

  if (!logement) {
    return (
      <div className="error-message">
        <h2>Logement non trouvé</h2>
        <p>Le logement avec l'ID "{id}" n'existe pas.</p>
        <Link to="/" className="error-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    const numericRating = parseInt(rating);
    
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fa-star ${i <= numericRating ? 'fa-solid star-filled' : 'fa-regular star-empty'}`}
          style={{ fontSize: '1.2rem', color: i <= numericRating ? '#FF6060' : '#E3E3E3' }}
        ></i>
      );
    }
    
    return stars;
  };

  return (
    <main className="logement-main">
      <Slideshow images={logement.pictures} />
      
      <section className="logement-info">
        <div className="logement-header">
          <div className="logement-title-section">
            <h1>{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="host-rating">
            <div className="host-info">
              <div className="host">
                <p className="host-name">{logement.host.name}</p>
                <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
              </div>
              <div className="stars-container">
                {renderStars(logement.rating)}
              </div>
            </div>
          </div>
        </div>

        <div className="details">
          <Collapse 
            title="Description" 
            description={logement.description} 
            isOpen={true} 
            className="description" 
          />

          <Collapse
            title="Équipements"
            description={
              <ul className="equipments-list">
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            }
            isOpen={true}
            className="equipments"
          />
        </div>
      </section>
    </main>
  );
}

export default Logement;