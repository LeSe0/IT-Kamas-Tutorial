import {combineReducers, createStore} from 'redux'
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import findUsersReducer from './fUsers-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
    homePage :  profileReducer,
    dialogsPage : dialogReducer,
    navbar : sidebarReducer,
    findUsers : findUsersReducer,
    auth : authReducer
}
)

let store = createStore(reducers)

export default store