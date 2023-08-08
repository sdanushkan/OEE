import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_ACTIVATION_REQUEST,
    USER_ACTIVATION_SUCCESS,
    USER_ACTIVATION_FAIL,

    USER_RESEND_ACTIVATION_REQUEST,
    USER_RESEND_ACTIVATION_SUCCESS,
    USER_RESEND_ACTIVATION_FAIL,

    USER_RESET_PASSWORD_REQUEST,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_FAIL,

    USER_RESET_PASSWORD_CONFIRMATION_REQUEST,
    USER_RESET_PASSWORD_CONFIRMATION_SUCCESS,
    USER_RESET_PASSWORD_CONFIRMATION_FAIL,

} from '../constants/userConstants'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/auth/jwt/create/',
            { 'username': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}

export const register = (email, password, re_password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/auth/users/',
            { 'email': email, 'username': email, 'password': password, 're_password':re_password },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data
                ? error.response.data.username || error.response.data.email || error.response.data.password || error.response.data.re_password
                : error.message,
        })
    }
}

export const activateUser = (uid, token) => async (dispatch) => {
    try {
        dispatch({
            type: USER_ACTIVATION_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/auth/users/activation/',
            { 'uid': uid, 'token': token },
            config
        )

        dispatch({
            type: USER_ACTIVATION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_ACTIVATION_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const reSendActivateLink = (email) => async (dispatch) => {
    try {
        dispatch({
            type: USER_RESEND_ACTIVATION_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/auth/users/resend_activation/',
            { 'email': email, },
            config
        )

        dispatch({
            type: USER_RESEND_ACTIVATION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_RESEND_ACTIVATION_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const resetPassword = (email) => async (dispatch) => {
    try {
        dispatch({
            type: USER_RESET_PASSWORD_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/auth/users/reset_password/',
            { 'email': email, },
            config
        )

        dispatch({
            type: USER_RESET_PASSWORD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_RESET_PASSWORD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const resetPasswordConfirmation = (uid, token, new_password, re_new_password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_RESET_PASSWORD_CONFIRMATION_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/auth/users/reset_password_confirm/',
            { 'uid': uid,'token': token, 'new_password': new_password, 're_new_password': re_new_password, },
            config
        )
 
        dispatch({
            type: USER_RESET_PASSWORD_CONFIRMATION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_RESET_PASSWORD_CONFIRMATION_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
