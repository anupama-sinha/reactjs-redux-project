import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import AppFunction from './components/AppFunction';
import ReducerComponent from './components/ReducerComponent';
import ReduxApp from './components/ReduxApp';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
//Type 1 : Redux Store
// import { createStore } from 'redux'
// import CountReducers from './reducers/CountReducers';
// const store = createStore(CountReducers)

//Type 2 : Redux with Middleware Saga Store
import { store } from './stores/store'
import ReduxSagaApp from './components/ReduxSagaApp'

ReactDOM.render(
  <Provider store={store}> 
    <React.StrictMode>
      <div style={{ border: '7px ridge red', width: '725px', padding: '10px', float: 'left' }}>
        <App />
      </div>
      <div style={{ border: '7px dashed green', width: '725px', padding: '10px', float: 'left' }}>
        <AppFunction />
      </div>
      <div style={{ border: '7px groove blue', width: '725px', padding: '10px', float: 'left' }}>
        <ReducerComponent />
      </div>
      <div style={{ border: '7px solid maroon', width: '725px', padding: '10px', float: 'left' }}>
        <ReduxApp />
      </div>
      <div style={{ border: '7px solid cyan', width: '725px', padding: '10px', float: 'left' }}>
        <ReduxSagaApp />
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();