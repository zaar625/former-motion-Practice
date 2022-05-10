
import './App.css';
import { NikeCard } from './components/nikecard';
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items:center;
  justify-content:center;
`;

function App() {
  return (
    <AppContainer>
      <NikeCard />
    </AppContainer>
  );
}

export default App;
