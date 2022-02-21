import {myAuthAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA'

let initialsState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};


const authReducer = (state = initialsState, action) => {

    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return (state);
    }

}

export const setUserAuthData = (userId, login, email, isAuth) => ({
    type: SET_USER_AUTH_DATA,
    data: {userId, login, email, isAuth}
});

export const getMyAuth = () => async (dispatch) => {
    const data = await myAuthAPI.getMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserAuthData(id, login, email, true))
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await myAuthAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getMyAuth())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let data = await myAuthAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false))
    }
}

export default authReducer;
