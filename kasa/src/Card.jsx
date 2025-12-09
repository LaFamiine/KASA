import { Link } from 'react-router-dom';
import './Card.css';

function Card({ title, cover }) {
  return (
    <article className="card">
      <div className="card-image">
        <img src={cover} alt={title} />
        <div className="card-overlay"></div>
      </div>
      <h3 className="card-title">{title}</h3>
    </article>
  );
}



export default Card;