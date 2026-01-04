import { useParams } from "react-router-dom";
import accommodationsData from "../data.json";
import Collapse from "../components/Collapse";
import "../style/Logement.css";

function Logement() {
  const { id } = useParams();

  const logement = accommodationsData.find((item) => item.id === id);

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
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="host-rating">
            <div className="host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
        </div>

        <div className="details">
          <Collapse title="Description" description={logement.description} isOpen={true} className="description" />

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
