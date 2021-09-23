import { ActionType } from './../ActionType';
import { IAuthData } from './../../types';
import { AuthAction } from './../Actions/AuthAction';
const AuthReducer = (
    state: IAuthData | null = null,
    action: AuthAction
): IAuthData | null => {
    switch (action.type) {
        case ActionType.LOGIN:
            return action.payload;
        case ActionType.LOGOUT:
            return null;
        default:
            return state;
    }
};
export default AuthReducer;
