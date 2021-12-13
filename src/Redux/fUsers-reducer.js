let initialState = {
    users :  [] ,
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const findUsersReducer = (state = initialState , action) =>{
    switch(action.type){
        case FOLLOW :
            return {
                ...state , 
                users : state.users.map((val , i) =>{
                    if(val.id == action.userId){
                        return {...val , followed : true}
                    }
                    return val
                })
            };
        case UNFOLLOW : 
            return {
                ...state , 
                users : state.users.map((val , i) =>{
                    if(val.id == action.userId){
                        return {...val , followed : false}
                    }
                    return val
                })
            }
        case SET_USERS : 
            return {
                ...state,
                users : [...state.users, ...action.users]
            }
        default : return state
    }

}

export const followAC = (userId) =>{return {type : FOLLOW, userId}}
export const setUsersAC = (users) =>{return {type : SET_USERS , users}}
export const unFollowAC = (userId) => {return {type : UNFOLLOW, userId}}

export default findUsersReducer