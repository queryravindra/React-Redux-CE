// import { createStore } from 'redux';
// import rootReducer from './22.rootReducer';

// const store = createStore(rootReducer);

// export default store;


// for 23.logger Middleware
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger'
// import rootReducer from './22.rootReducer';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

// export default store;


// 29.Redux Thunk Get Request
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from './22.rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;