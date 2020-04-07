import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Routes from './router';

function App() {
  return (
    <>
      <Routes>
        <NavBar />
      </Routes>
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