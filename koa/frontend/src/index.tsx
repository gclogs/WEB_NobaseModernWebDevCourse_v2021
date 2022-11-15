import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './redux/configureStore';

const store = configureStore();

const container: any = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <App store={store}/>
    </Router>
  </React.StrictMode>
);
