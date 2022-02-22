import MainScreen from '../../screens/main-screen/main-screen';
import {Offer} from '../../types/offer';

type AppScreenProps = {
  propertiesCount: number,
  offers: Offer[],
}

function App({offers, propertiesCount}: AppScreenProps): JSX.Element {
  return <MainScreen offers={offers} propertiesCount={propertiesCount} />;
}

export default App;
