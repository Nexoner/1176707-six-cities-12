import MainScreen from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../../pages/login-page/login-page';
import RoomScreen from '../../pages/room-page/room-page';
import FavoriteScreen from '../../pages/favorites-page/favorites-page';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import ErrorScreen from '../../pages/error-page/404-page';
import PrivateRoute from '../private-route/private-route';
import { CardsType } from '../../types/types';

type AppScreenProps = {
  cards: CardsType;
};

function App(prop: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen cards={prop.cards} />}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route>
          <Route
            path='/offer/:id'
            element={prop.cards.map((card) => (
              <RoomScreen
                key={card.id}
                price={card.price}
                description={card.description}
                type={card.type}
                img={card.img}
              />
            ))}
          />
        </Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoriteScreen cards={prop.cards} />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
