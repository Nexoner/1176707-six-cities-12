import MainScreen from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../../pages/login-page/login-page';
import FavoriteScreen from '../../pages/favorites-page/favorites-page';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import ErrorScreen from '../../pages/error-page/404-page';
import PrivateRoute from '../private-route/private-route';
import Cards from './cards';
import RoomScreen from '../../pages/room-page/room-page';
import { Point } from '../../types/types';
import { useState } from 'react';
import { POINTS } from '../../mocks/points';

function App(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const onListItemHover = (listItemName: string) => {
    const currentPoint = POINTS.find((point) =>
      point.title === listItemName,
    );
    setSelectedPoint(currentPoint);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Main}
          element={<MainScreen point={selectedPoint} />}
        >
          <Route path='/' element={<Cards points={POINTS} onListItemHover={onListItemHover} />} />
        </Route>

        <Route path='/offer/:id' element={<RoomScreen />}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoriteScreen />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
