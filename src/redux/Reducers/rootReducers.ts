import { combineReducers } from 'redux';
import Cart from './CartReducers';
import Auth from './AuthReducers';

export const rootReducer = combineReducers({
    Cart,
    Auth,
});
