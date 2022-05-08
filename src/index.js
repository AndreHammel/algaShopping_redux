import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeView from './views/Home.view';
import store from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <HomeView />
    </Provider>
  </React.StrictMode>
);
