import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/pages/App';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import '@/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
