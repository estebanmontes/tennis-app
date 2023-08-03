import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Import the combined reducer from reducers/index.ts

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
