import { createStore, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export function configureStore(initialState) {
  return createStore(rootReducer, initialState, compose(
    // Add other middleware on this line...
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(browserHistory))
  ));
}
