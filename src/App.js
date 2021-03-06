import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import Routes from './routes';
import Header from './components/Header';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';

import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} transition={Zoom} />
      </Router>
    </Provider>
  );
}

export default App;
