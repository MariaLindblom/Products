import { RoutesApp } from './components/Routes';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route>
        <RoutesApp />
      </Route>
    </Routes>
  );
}

export default App;