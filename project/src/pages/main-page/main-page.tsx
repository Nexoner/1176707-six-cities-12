import Cards from '../../components/app/cards';

type CardCount = {
  cardsCount: number;
};

function MainScreen({ cardsCount }: CardCount): JSX.Element {
  const cards = [
    {
      id: 0,
      type: 'first',
      price: '120',
      description: 'Beautiful &amp; luxurious apartment at great location',
      img: 'img/apartment-01.jpg'
    },
    {
      id: 1,
      type: 'second',
      price: '132',
      description: 'Canal View Prinsengracht',
      img: 'img/apartment-02.jpg'
    },
    {
      id: 2,
      type: 'third',
      price: '180',
      description: 'Nice, cozy, warm big bed apartment',
      img: 'img/apartment-03.jpg'
    },
    {
      id: 4,
      type: 'second',
      price: '80',
      description: 'Wood and stone place',
      img: 'img/room.jpg'
    },
  ];
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-Link header__logo-Link--Linkctive">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-Link header__nav-Link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-Link">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-Link tabs__item">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-Link tabs__item">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-Link tabs__item">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-Link tabs__item tabs__item--Linkctive">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-Link tabs__item">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-Link tabs__item">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places src stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type">
                  Popular
                  <svg
                    className="places__sorting-Linkrrow"
                    width="7"
                    height="4"
                  >
                    <use href="#icon-Linkrrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--cussrcm places__options--opened">
                  <li className="places__option places__option--Linkctive">
                    Popular
                  </li>
                  <li className="places__option">Price: low src high</li>
                  <li className="places__option">Price: high src low</li>
                  <li className="places__option">srcp rated first</li>
                </ul>
              </form>
              <Cards cards={cards} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
