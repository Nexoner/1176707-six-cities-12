import { Link, Outlet } from 'react-router-dom';
import Map from '../../components/map/map';
import { CITY } from '../../mocks/city';
import { POINTS } from '../../mocks/points';
import { Point } from '../../types/types';

type MainProps = {
  point: Point | undefined;
}

function MainScreen(props: MainProps): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-Link header__logo-Link--Linkctive'>
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width='81'
                  height='41'
                />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a className='header__nav-Link header__nav-Link--profile'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      <Link to='/favorites' title='favorites'>
                        Oliver.conner@gmail.com
                      </Link>
                    </span>
                    <span className='header__favorite-count'>3</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <Link to='/login' title='login'>
                    <span className='header__signout'>Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <li className='locations__item'>
                <a className='locations__item-Link tabs__item'>
                  <span>Paris</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-Link tabs__item'>
                  <span>Cologne</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-Link tabs__item'>
                  <span>Brussels</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-Link tabs__item tabs__item--Linkctive'>
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-Link tabs__item'>
                  <span>Hamburg</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-Link tabs__item'>
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>312 places src stay in Amsterdam</b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type'>
                  Popular
                  <svg
                    className='places__sorting-Linkrrow'
                    width='7'
                    height='4'
                  >
                    <use href='#icon-Linkrrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--cussrcm places__options--opened'>
                  <li className='places__option places__option--Linkctive'>
                    Popular
                  </li>
                  <li className='places__option'>Price: low src high</li>
                  <li className='places__option'>Price: high src low</li>
                  <li className='places__option'>srcp rated first</li>
                </ul>
              </form>
              <Outlet />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  city={CITY}
                  points={POINTS}
                  selectedPoint={props.point}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
