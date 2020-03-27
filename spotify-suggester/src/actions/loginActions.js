import api from '../utils/api';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = () => dispatch => {
    dispatch({ type: LOGIN_START });

    api()
        .post('', user)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user_id', res.data.user.id)
        })
        .catch(err => {
            dispatch({ type: LOGIN_ERROR, payload: err.error })
        })
}