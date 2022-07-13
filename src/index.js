import React from 'react';
import { createRoot } from 'react-dom/client';
import { StarRaiting } from './components/star-raiting';

const container = document.querySelector('.root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <StarRaiting />
  </React.StrictMode>
);
