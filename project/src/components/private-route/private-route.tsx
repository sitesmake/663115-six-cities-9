import {AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const hasAccess = false;

  return hasAccess ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
