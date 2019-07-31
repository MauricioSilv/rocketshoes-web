import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import Routes from './routes';
import Header from './components/Header';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} transition={Zoom} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
