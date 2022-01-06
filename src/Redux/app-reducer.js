import { getUserData } from "./auth-reducer";

const SET_INITIALIZATION = 'SET_INITIALIZATION'

let initialState = {
    initialization : false
}

const appReducer = (state = initialState , action) =>{  
    switch(action.type){
        case SET_INITIALIZATION : {
            return {
                ...state,
                initialization : true,
            }
        }
        default : {
            return state;
        }
    }
}

export const setInitialization = () =>({type : SET_INITIALIZATION})

export const initializeApp = () => (dispatch) =>{
    let promise = dispatch(getUserData())

    Promise.all([promise]).then(() =>{
        dispatch(setInitialization())
    })
}

export default appReducer