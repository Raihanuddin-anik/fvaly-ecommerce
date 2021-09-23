import { IProduct } from '../../types';
import { CartAction } from '../Actions/CartAction';
import { ActionType } from './../ActionType';

export const AddToCart = (payload: IProduct): CartAction => {
    return {
        type: ActionType.ADD_TO_CART,
        payload,
    };
};

export const RemoveFromCart = (payload: string): CartAction => {
    return {
        type: ActionType.REMOVE_FROM_CART,
        payload,
    };
};

export const ClearCart = (): CartAction => {
    return {
        type: ActionType.CLEAR_CART,
    };
};
