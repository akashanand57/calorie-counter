import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';
import VantaBackground from './components/VantaBackground';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div className="vanta-wrapper">
      <VantaBackground />
      <div className="app-wrapper">
        <App />
      </div>
    </div>
  </Provider>
);
