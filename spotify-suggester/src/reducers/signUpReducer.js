import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/signUpActions';

const initialState = {
    newUser: {},
    isLoading: false,
    error: null
}

export function signUpReducer(state = initialState, action) {
    switch(action.type) {
        case SIGNUP_START: 
            return {
                ...state,
                isLoading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                newUser: action.payload
            }
        case SIGNUP_ERROR: 
            return {
                ...state,
                error: action.payload
            }
    }
}