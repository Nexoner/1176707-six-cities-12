import { CardsType, CardType } from '../types/types';

export const cards: CardsType = [
  {
    id: 0,
    type: 'Premium',
    price: '120',
    description: 'Beautiful &amp; luxurious apartment at great location',
    img: 'img/apartment-01.jpg',
  },
  {
    id: 1,
    type: '',
    price: '132',
    description: 'Canal View Prinsengracht',
    img: 'img/apartment-02.jpg',
  },
  {
    id: 2,
    type: '',
    price: '180',
    description: 'Nice, cozy, warm big bed apartment',
    img: 'img/apartment-03.jpg',
  },
  {
    id: 3,
    type: '',
    price: '80',
    description: 'Wood and stone place',
    img: 'img/room.jpg',
  },
];

export const getCards = (): Promise<CardsType> =>
  new Promise((resolve) => resolve(cards));

export const getCardById = (id: string | number | undefined): Promise<CardType | undefined> => {
  if(id === undefined) {
    return Promise.resolve(undefined);
  }
  return new Promise((resolve) => resolve(cards.find(({id: cardId}) => `${cardId}` === `${id}`)));
};
