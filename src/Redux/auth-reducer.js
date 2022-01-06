import { authAPI, usersAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    email : null,
    id : null,
    login : null,
    isAuth : false,
}

const authReducer = (state = initialState , action) =>{  
    switch(action.type){
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
            }
        }
        default : {
            return state;
        }
    }
}

export const setUserData = (id , email , login, isAuth) =>({type : SET_USER_DATA , data : {id , email , login, isAuth}})

export const getUserData = () => (dispatch) =>{
    return usersAPI.auth().then(response =>{
        if(response.resultCode === 0){
            let {id , email , login} = response.data
            dispatch(setUserData(id , email, login, true))
        }
    })
}

export const login = (email , password , rememberMe) => (dispatch) =>{
    authAPI.login(email , password , rememberMe)
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(getUserData())
            }
            else{
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Email or password is wrong'
                dispatch(stopSubmit('loginForm' , {_error : message}))
            }
        })
}

export const logout = () => (dispatch) =>{
    authAPI.logout()
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(setUserData(null , null, null, false))
            }
        })
}

export default authReducer