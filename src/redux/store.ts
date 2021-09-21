import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CartReducer from './Reducers/CartReducers';

const rootReducer = combineReducers({
    Cart: CartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export type AppState = ReturnType<typeof rootReducer>;
export default store;
