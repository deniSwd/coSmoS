import {myAuthAPI} from "../API/api";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA'

let initialsState = {
   userId: null,
    login: null,
    email: null,
    isAuth:false
};


const authReducer = (state = initialsState, action) => {

    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
              ...action.data,
                isAuth: true
            }
        default:
            return (state);
    }

}

export const setUserAuthData = (userId,login,email) => ({type: SET_USER_AUTH_DATA, data:{userId,login,email}});

export const getMyAuth = () => {
    return (dispatch) => {
        myAuthAPI.getMe().then(data => {
            if (data.resultCode === 0) {
                let {id,login,email} = data.data
                dispatch(setUserAuthData(id,login,email))
            }

        })
    }
}
export default authReducer;
