let initialState = {
    users :  [] ,
    usersCount : 10,
    initialPage : 1,
    totalUsers : '',
    totalPages : '',
    isFetching : false,
    pagesMargin : 1,
    pagesFSlice : 4
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_USERS_TOTAL_SIZE = 'SET_USERS_TOTAL_SIZE'
const SELECT_PAGE = 'SELECT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

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
                users : [...action.users]
            }
        case SET_USERS_TOTAL_SIZE :
            return {
                ...state , 
                totalUsers : action.usersTotal,
            }
        case SELECT_PAGE :
            return {
                ...state,
                initialPage : action.selectPage
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state ,
                isFetching : action.count
            }
        default : return state
    }

}

export const followAC = (userId) =>{return {type : FOLLOW, userId}}
export const setUsersAC = (users) =>{return {type : SET_USERS , users}}
export const unFollowAC = (userId) => {return {type : UNFOLLOW, userId}}
export const totalUsersAC = (usersTotal) =>{return {type : SET_USERS_TOTAL_SIZE , usersTotal}}
export const selectPageAC = (selectPage) =>{return {type : SELECT_PAGE , selectPage}}
export const toggleIsFetching = (count) =>{return {type : TOGGLE_IS_FETCHING , count}} 

export default findUsersReducer