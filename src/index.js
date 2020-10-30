import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import AppFunction from './components/AppFunction';
import ReducerComponent from './components/ReducerComponent';
import ReduxApp from './components/ReduxApp';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { store } from './stores/store';

ReactDOM.render(
  <Provider store={store}> {/* Required for redux store */}
    <React.StrictMode>
      <div style={{ border: '5px solid red' }}>
        <App />
      </div>
      <div style={{ border: '5px solid green' }}>
        <AppFunction />
      </div>
      <div style={{ border: '5px solid blue' }}>
        <ReducerComponent />
      </div>
      <div style={{ border: '5px solid red' }}>
        <ReduxApp />
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();