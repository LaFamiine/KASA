import { useState } from 'react';
import '../style/Slideshow.css';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="carousel">
      <div className="carousel-images">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      
      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            ❯
          </button>
          
          <div className="carousel-counter">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;