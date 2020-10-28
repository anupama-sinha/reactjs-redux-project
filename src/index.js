import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import AppFunction  from './AppFunction';
import ReduxApp from './redux/ReduxApp';
import * as serviceWorker from './serviceWorker';
//Redux
import { createStore, combineReducers } from 'redux'
import CountReducers from './redux/CountReducers';
import { Provider } from 'react-redux'

// import { render } from 'react-dom'
// import rootReducer from './reducers'


const reducers = combineReducers({ CountReducers}) //Takes all reducer names separated by commas
const store = createStore(reducers); //Global store with combined reducer

/*ReactDOM.render(
  <React.StrictMode>
    <AppFunction/>
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('root')
);

/*function render() {
  ReactDOM.render(
    <div className="container">
      <ReduxApp store={store} />
    </div>,
    document.getElementById('root')
  );
} 
store.subscribe(render);
render();*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();