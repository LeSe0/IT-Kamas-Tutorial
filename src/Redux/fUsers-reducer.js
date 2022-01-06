import { usersAPI , followAPI} from "../api/api"

let initialState = {
    users :  [] ,
    usersCount : 10,
    initialPage : 1,
    totalUsers : '',
    totalPages : '',
    isFetching : false, 
    pagesMargin : 1,
    pagesFSlice : 4,
    followInReq : [],
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_USERS_TOTAL_SIZE = 'SET_USERS_TOTAL_SIZE'
const SELECT_PAGE = 'SELECT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROCESS = 'FOLLOWING_IN_PROCESS'

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
                }),
            };
        case UNFOLLOW : 
            return {
                ...state , 
                users : state.users.map((val , i) =>{
                    if(val.id == action.userId){
                        return {...val , followed : false}
                    }
                    return val
                }),
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
        case FOLLOWING_IN_PROCESS :
            return {
                ...state,
                followInReq : action.isFollowing === true ? [...state.followInReq , action.userId] 
                : state.followInReq.filter(id=>{ return id != action.userId})
            }
        default : return state
    }

}

export const follow = (userId) =>{return {type : FOLLOW, userId}}
export const addUsers = (users) =>{return {type : SET_USERS , users}}
export const unFollow = (userId) => {return {type : UNFOLLOW, userId}}
export const setTotalUsers = (usersTotal) =>{return {type : SET_USERS_TOTAL_SIZE , usersTotal}}
export const selectPage = (selectPage) =>{return {type : SELECT_PAGE , selectPage}}
export const toggleIsFetching = (count) =>{return {type : TOGGLE_IS_FETCHING , count}}
export const followingInProcess = (isFollowing, userId) => ({type : FOLLOWING_IN_PROCESS , isFollowing , userId})


export const getUsers = (initialPage , usersCount) => (dispatch) =>{
    dispatch(toggleIsFetching(true))
    dispatch(selectPage(initialPage))
    usersAPI.getUsers(initialPage , usersCount).then(response =>{
        dispatch(toggleIsFetching(false))  
        dispatch(setTotalUsers(response.totalCount))
        dispatch(addUsers(response.items));
    })
}

export const unfollowThunk = (id) => (dispatch) =>{
    followAPI.unfollowRequest(id, followingInProcess)
    .then(response =>{
        if(response.resultCode === 0){
            dispatch(unFollow(id))
            dispatch(followingInProcess(false, id))
        }
    })
}

export const followThunk = (id) => (dispatch) =>{
    followAPI.followRequest(id, followingInProcess)
    .then(response =>{
        if(response.resultCode === 0){
            dispatch(follow(id))
            dispatch(followingInProcess(false, id))
        }
    }) 
}

export default findUsersReducer