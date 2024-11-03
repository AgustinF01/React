import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
      <div>
          <NavBar />
          <ItemListContainer bienvenida="¡Bienvenido a Mobius!" />
      </div>
  );
};

export default App;
