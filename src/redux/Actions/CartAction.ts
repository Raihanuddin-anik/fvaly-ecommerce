import { IProduct } from '../../types';
import { ActionType } from './../ActionType';

export const AddToCart = (payload: IProduct) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload,
    };
};

export const RemoveFromCart = (payload: IProduct) => {
    return {
        type: ActionType.REMOVE_FROM_CART,
        payload,
    };
};

export const ClearCart = () => {
    return {
        type: ActionType.CLEAR_CART,
        payload: '',
    };
};

export type CartAction =
    | ReturnType<typeof AddToCart>
    | ReturnType<typeof RemoveFromCart>
    | ReturnType<typeof ClearCart>;
