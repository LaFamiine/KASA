import { Link } from 'react-router-dom';
import '../style/Card.css';

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <div className="card">
        <img src={cover} alt={title} className="card-image" />
        <div className="card-overlay"></div>
        <h3 className="card-title">{title}</h3>
      </div>
    </Link>
  );
}

export default Card;