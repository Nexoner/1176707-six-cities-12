import { CardsType } from '../../types/types';
import Card from './card';

type CardsProp = {
  cards: CardsType;
}

function Cards(prop: CardsProp): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {prop.cards.map((card) => (
        <Card
          key={card.id}
          price={card.price}
          description={card.description}
          type={card.type}
          img={card.img}
        />
      ))}
    </div>
  );
}

export default Cards;
