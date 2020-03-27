import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR 
} from '../actions/loginActions';

const initialState = {
    user: {},
    isLoading: false,
    error: null
};

export function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case LOGIN_ERROR: 
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default: 
            return state
    }
}