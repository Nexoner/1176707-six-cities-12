import MainScreen from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginScreen from '../../pages/login-page/login-page';
import RoomScreen from '../../pages/room-page/room-page';
import FavoriteScreen from '../../pages/favorites-page/favorites-page';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import ErrorScreen from '../../pages/error-page/404-page';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  cardCount: number;
}

function App({cardCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen cardsCount={0} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={<RoomScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoriteScreen />
            </PrivateRoute>
          }
        />
        <Route
          path='*'
          element={<ErrorScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
