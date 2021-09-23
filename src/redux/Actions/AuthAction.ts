import { IAuthData } from '../../types';
import { ActionType } from './../ActionType';

interface LogInAction {
    type: ActionType.LOGIN;
    payload: IAuthData;
}

interface LogOutAction {
    type: ActionType.LOGOUT;
}

export type AuthAction = LogInAction | LogOutAction;
