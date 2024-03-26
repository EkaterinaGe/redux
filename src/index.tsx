import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { store } from './store/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found in the document.');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);