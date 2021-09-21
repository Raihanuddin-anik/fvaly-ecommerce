import { IProduct } from '../../types';
import { CartAction } from '../Actions/CartAction';
import { ActionType } from '../ActionType';

const CartReducer = (state: IProduct[] = [], action: CartAction) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART:
            return [...state, action.payload];
        case ActionType.REMOVE_FROM_CART: {
            const NewState = state.filter(
                (item) => item._id !== action.payload
            );
            return NewState;
        }
        case ActionType.CLEAR_CART:
            return [];
        default:
            return state;
    }
};

export default CartReducer;
