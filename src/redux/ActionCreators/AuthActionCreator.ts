import { Dispatch } from 'react';
import AuthService from '../../Services/AuthService';
import { AuthAction } from '../Actions/AuthAction';
import { ActionType } from '../ActionType';

export const login = (payload: { email: string; password: string }) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: ActionType.LOGIN_PENDING,
        });
        AuthService.login(payload)
            .then((data) => {
                dispatch({
                    type: ActionType.LOGIN_SUCCESS,
                    payload: data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: ActionType.LOGIN_ERROR,
                    payload: err?.response?.data?.message,
                });
            });
    };
    // return ;
};

export const LogOut = () => {
    return {
        type: ActionType.LOGOUT,
    };
};
