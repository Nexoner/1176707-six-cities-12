import { useEffect, useState } from 'react';
import { getCards } from '../../mocks/offers';
import { CardsType } from '../../types/types';
import Card from './card';

function Cards(): JSX.Element {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [cards, setCards] = useState<CardsType>([]);

  useEffect(() => {
    (async () => {
      const cardsData = await getCards();
      setCards(cardsData);
      setIsDataLoaded(true);
    })();
  },[]);
  return (
    <div className="cities__places-list places__list tabs__content">
      {isDataLoaded ? (cards.map((card) => (
        <Card key={card.id} id={card.id} type={card.type} img={card.img} price={card.price} description={card.description} />
      ))) : <div>Загружаем данные...</div>}
    </div>
  );
}

export default Cards;
