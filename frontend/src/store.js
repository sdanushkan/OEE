import { combineReducers, applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userActivationReducer, userLoginReducer, userPasswordResetConfirmationReducer, userPasswordResetReducer, userRegisterReducer, userResendActivationReducer } from './reducers/userReducers'
import { requestCreateReducer } from './reducers/requestReducers'

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    userActivation : userActivationReducer,
    userResentActivation : userResendActivationReducer,
    userPasswordReset : userPasswordResetReducer,
    userPasswordResetConfirmation : userPasswordResetConfirmationReducer,
    requestCreate: requestCreateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin : {userInfo : userInfoFromStorage}
}

const  middlwere = [thunk]

const store = configureStore({reducer, preloadedState:initialState}, composeWithDevTools(applyMiddleware(...middlwere)))

export default store