import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Routes from './router';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <NavBar />
        </Routes>
      </Provider>
    </>
  );
}

export default App;


/*

<Provider store={store}>
  <Search />
  <ImageComponent />
</Provider>

*/