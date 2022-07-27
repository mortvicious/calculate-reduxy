import React from 'react';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator/Calculator';
import Header from './components/Header/Header';
import { setupStore } from './components/store';
import { useAppSelector } from './hooks/redux';


function App() {
  const store = setupStore()
  return (
    <Provider store={store}>
      <div className="App">
          <Header/>
          <Calculator/>
      </div>
    </Provider>
  );
}

export default App;
