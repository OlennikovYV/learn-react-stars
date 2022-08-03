import React, { useState } from 'react';
import { Star } from './star';

export function StarRaiting({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((el, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => setSelectedStars(index + 1)}
        />
      ))}
      <p className="star-rating__count-stars">
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
