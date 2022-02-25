import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {AppRoute} from './const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginScreen from './screens/login-screen/login-screen';
import FavoritesScreen from './screens/favorites-screen/favorites-screen';
import PropertyScreen from './screens/property-screen/property-screen';
import NotFoundScreen from './screens/not-found-screen/not-found-screen';
import PrivateRoute from './components/private-route/private-route';
import {offers} from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<App offers={offers} propertiesCount={5} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <FavoritesScreen />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<PropertyScreen {...offers[0]} />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
