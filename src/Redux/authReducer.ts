import {myAuthAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA'
const SET_CAPTCHA_URL_SUCCESS = 'SET-CAPTCHA-URL-SUCCESS'

let initialsState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false as boolean,
    captcha: null as string | null
}
export type AuthInitialStateType = typeof initialsState

const authReducer = (state: AuthInitialStateType = initialsState, action: any): AuthInitialStateType => {

    switch (action.type) {
        case SET_USER_AUTH_DATA:
        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.data
            }
        default:
            return (state);
    }

}
type setUserAuthDataActionDataType = {
    userId: number | null
    login: string | null
    email: string |null
    isAuth: boolean
}
type setUserAuthDataActionType = {
    type: typeof SET_USER_AUTH_DATA
    data: setUserAuthDataActionDataType
}
export const setUserAuthData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean)
    : setUserAuthDataActionType => ({
    type: SET_USER_AUTH_DATA,
    data: {userId, login, email, isAuth}
});

type setCaptchaUrlSuccessActionType = {
    type: typeof SET_CAPTCHA_URL_SUCCESS
    data: { captchaUrl: string }
}

export const setCaptchaUrlSuccess = (captchaUrl: string): setCaptchaUrlSuccessActionType => ({
    type: SET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}
});

export const getMyAuth = () => async (dispatch: any) => {
    const data = await myAuthAPI.getMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserAuthData(id, login, email, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const data = await myAuthAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getMyAuth())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    let data = await myAuthAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false))
    }
}

export default authReducer;
