import MainScreen from '../../pages/main-page/main-page';

type AppScreenProps = {
  cardCount: number;
}

function App({cardCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      count={cardCount}
    />
  );
}

export default App;
