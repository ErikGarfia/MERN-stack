import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


let currentState;

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();
  if (previousState && previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    token
      ? localStorage.setItem('token', token)
      : localStorage.removeItem('token');
  }
});

export default store;
