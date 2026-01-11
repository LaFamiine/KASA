import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import '../style/Slideshow.css';

function Slideshow() {
  const { id } = useParams(); // Utilisation de l'id en paramètre
  const logement = data.find(logement => logement.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [id]);
  
  if (!logement) {
    return <div>Logement non trouvé</div>;
  }
  
  const { pictures: images } = logement;
  
  if (!images || images.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <div className="slideshow-images">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
          className="slideshow-image"
        />
      </div>
      
      {images.length > 1 && (
        <>
          <button className="slideshow-btn prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="slideshow-btn next" onClick={nextSlide}>
            ❯
          </button>
          
          <div className="slideshow-counter">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}



export default Slideshow;