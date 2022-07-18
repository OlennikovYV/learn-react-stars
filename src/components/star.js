import React from 'react';
import { FaStar } from 'react-icons/fa';

export function Star({ selected = false, onSelect = f => f }) {
  return (
    <FaStar
      className={
        `star-rating__star ` + `star-rating__star_${selected ? 'red' : 'gray'}`
      }
      onClick={onSelect}
    />
  );
}
