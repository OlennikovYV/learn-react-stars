import React, { useState } from 'react';
import { Star } from './star';

// export function StarRaiting({ totalStars = 5 }) {
//   return <Star />;
// }

export function StarRaiting({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {[...Array(totalStars)].map((el, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => setSelectedStars(index + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
