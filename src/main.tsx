import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
console.log.apply(console, [
  '%c Designed and Coded by Alex ',
  'color: ' +
    'black' +
    '; background: ' +
    '#ca6aeb' +
    '; padding:5px 0; border-radius: 5px; font-weight: bold',
]);
