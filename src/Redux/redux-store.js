import {applyMiddleware, combineReducers, createStore} from 'redux'
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import findUsersReducer from './fUsers-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer'

let reducers = combineReducers({
    homePage :  profileReducer,
    dialogsPage : dialogReducer,
    navbar : sidebarReducer,
    findUsers : findUsersReducer,
    auth : authReducer,
    form : formReducer,
    app : appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store