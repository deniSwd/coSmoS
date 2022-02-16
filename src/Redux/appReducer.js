import {getMyAuth} from "./authReducer";


const SET_INITIAL_APP = 'SET-INITIAL-APP'

let initialsState = {
    initialize: false
}


const appReducer = (state = initialsState, action) => {

    switch (action.type) {
        case SET_INITIAL_APP:
            return {
                ...state,
                initialize: true
            }
        default:
            return (state);
    }

}

export const setInitialApp = () => ({type: SET_INITIAL_APP});

export const initializedApp = () => {
    return (dispatch) => {
        let promise = dispatch(getMyAuth())
        Promise.all([promise])
            .then(() => {
                dispatch(setInitialApp())
            })
    }
}


export default appReducer;
