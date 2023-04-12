import MainScreen from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../../pages/login-page/login-page';
// import FavoriteScreen from '../../pages/favorites-page/favorites-page';
import { AppRoute } from '../../const/const';
import ErrorScreen from '../../pages/error-page/404-page';
// import PrivateRoute from '../private-route/private-route';
import Cards from './cards';
import RoomScreen from '../../pages/room-page/room-page';
// import RoomScreen from '../../pages/room-page/room-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        >
          <Route path='/' element={<Cards />} />
        </Route>

        <Route path='/offer/:id' element={<RoomScreen />}/>
        {/* <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoriteScreen />
            </PrivateRoute>
          }
        /> */}
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
