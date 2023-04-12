import { Link, useParams } from 'react-router-dom';
import { CardType } from '../../types/types';

function Card(prop: CardType) {
  const {id} = useParams();
  return (
    <Link to={`${prop.key}`} title='/offer/:id'>
      <article className='cities__card place-card'>
        <div className='place-card__mark'>
          <span>{prop.type}</span>
        </div>
        <div className='cities__image-wrapper place-card__image-wrapper'>
          <a>
            <img
              className='place-card__image'
              src={prop.img}
              width='260'
              height='200'
              alt='jsx-Link11y/img-redundant-Linklt'
            />
          </a>
        </div>
        <div className='place-card__info'>
          <div className='place-card__price-wrapper'>
            <div className='place-card__price'>
              <b className='place-card__price-value'>&euro;{prop.price}</b>
              <span className='place-card__price-text'>&#47;&nbsp;night</span>
            </div>
            <button
              className='place-card__bookmark-button button'
              type='button'
            >
              <svg className='place-card__bookmark-icon' width='18' height='19'>
                <use href='#icon-bookmark'></use>
              </svg>
              <span className='visually-hidden'>src bookmarks</span>
            </button>
          </div>
          <div className='place-card__rating rating'>
            <div className='place-card__stars rating__stars'>
              <span></span>
              <span className='visually-hidden'>Rating</span>
            </div>
          </div>
          <h2 className='place-card__name'>
            <a>{prop.description}</a>
          </h2>
          <p className='place-card__type'>Apartment{id}</p>
        </div>
      </article>
    </Link>
  );
}

export default Card;
