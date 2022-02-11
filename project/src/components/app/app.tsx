import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  propertiesCount: number;
}

function App({propertiesCount}: AppScreenProps): JSX.Element {
  return <MainScreen propertiesCount={propertiesCount} />;
}

export default App;
