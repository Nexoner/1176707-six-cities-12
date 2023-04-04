import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {cards} from './mocks/offers';

const Setting = {
  CardCount: 6,
  cards: cards,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      cards = {Setting.cards}
    />
  </React.StrictMode>,
);
