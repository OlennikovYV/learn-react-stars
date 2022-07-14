import React from 'react';
import { FaStar } from 'react-icons/fa';

export function Star({ selected = false, onSelect = f => f }) {
  return (
    <FaStar
      className={
        `star-rating__count-stars ` +
        `star-rating__count-stars_${selected ? 'red' : 'gray'}`
      }
      onClick={onSelect}
    />
  );
}
