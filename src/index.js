import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';

import App from './components/App';

// TODO: 추후 제거 예정
console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
