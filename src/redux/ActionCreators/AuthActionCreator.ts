import { Dispatch } from 'react';
import AuthService from '../../Services/AuthService';
import { AuthAction } from '../Actions/AuthAction';
import { ActionType } from '../ActionType';

export const LogIn = (payload: { email: string; password: string }) => {
    return (dispatch: Dispatch<AuthAction>) => {
        AuthService.login(payload).then((data) => {
            dispatch({
                type: ActionType.LOGIN,
                payload: data,
            });
        });
    };
};

// export const LogOut = (payload: string) => {
//     return {
//         type: ActionType.LOGOUT,
//         payload,
//     };
// };
