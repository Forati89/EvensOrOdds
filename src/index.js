import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(rootReducer);
store.subscribe(()=>console.log('store.getState()', store.getState()));




ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,
 document.getElementById('root'));
