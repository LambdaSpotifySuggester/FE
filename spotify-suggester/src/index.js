import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { loginReducer } from './reducers/loginReducer';
import { signUpReducer } from './reducers/signUpReducer'
import './index.css';
import App from './App';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

