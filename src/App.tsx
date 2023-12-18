
import { DataProvider } from './providers';
import { BikeList } from './components/BikeList';
import { Filters } from './components/Filters';
import { Container } from './components/Container';
import { PageSwitcher } from './components/PageSwitcher';

function App() {

  return (
    <Container>
      <DataProvider>
        <Filters />
        <BikeList />
        <PageSwitcher />
      </DataProvider>
    </Container>
  );
}

export default App;
