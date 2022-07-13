import React from 'react';
import { Star } from './star';

// export function StarRaiting({ totalStars = 5 }) {
//   return <Star />;
// }

export function StarRaiting({ totalStars = 5 }) {
  return (
    <>
      {[...Array(totalStars)].map((el, index) => (
        <Star key={index} />
      ))}
      <p>{totalStars} stars</p>
    </>
  );
}
