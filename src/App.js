import React from 'react';
import Routes from './routes';
import GlobalStyle from './global/style';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
