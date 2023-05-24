import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './plugins/store';
import StoreRouter from './plugins/store/StoreRouter';
import AddItem from './plugins/store/AddItem';

const rootEle = document.getElementById('root');
if(rootEle){
  const root = ReactDOM.createRoot(rootEle);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const pluginEle = document.getElementById('plugin');
if(pluginEle){
  const plugin = ReactDOM.createRoot(pluginEle);
  plugin.render(
    <React.StrictMode>
      <StoreRouter />
    </React.StrictMode>
  );
}

const storeEle = document.getElementById('store');
if(storeEle){
  const store = ReactDOM.createRoot(storeEle);
  store.render(
    <React.StrictMode>
      <AddItem />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
