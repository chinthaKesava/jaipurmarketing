import React, { useState } from 'react';
import './index.css';

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextCard = () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevCard = () => {
    const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="card-carousel">
      <button className="arrow prev" onClick={goToPrevCard}>{'<'}</button>
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === currentIndex ? 'active' : ''}`}
          >
            {card}
          </div>
        ))}
      </div>
      <button className="arrow next" onClick={goToNextCard}>{'>'}</button>
    </div>
  );
};

export default CardCarousel;
