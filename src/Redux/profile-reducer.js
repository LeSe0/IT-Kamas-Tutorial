import { profileAPI } from "../api/api"

const ADD_POST = 'ADDPOST'
const CHANGE_POST_TEXT = 'CHANGEPOSTTEXT'
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

let initialState = {
    posts : [
        {
            id : 1,
            img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
            postInner : 'Hi , its my first post',
            likes : 55,
            shares : 10
        },
        {
            id : 2 ,
            img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
            postInner : 'Hi , its my second post i think',
            likes : 35,
            shares : 40
        },
        {
            id : 3,
            img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
            postInner : 'How are you',
            likes : 515,
            shares : 60
        },       
    ],
    userInfo: {},
    status : '',
    contactIcons : [
        'facebook',
        'github',
        'instagram',
        'chrome',
        'twitter',
        'vk',
        'chrome',
        'youtube'
    ],
}

const profileReducer = (state = initialState , action) =>{
    switch (action.type) {
        case ADD_POST : {
                let newPost = {
                    id : state.posts[state.posts.length - 1].id + 1,
                    img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                    postInner : action.newPost,
                    likes : 0,
                    shares : 0
                }
                return {
                    ...state,
                    posts : [...state.posts, newPost],
                    newPostText : ''
                }
        }
        case SET_PROFILE_DATA : {
            return {
                ...state,
                userInfo : {...action.data}
            }
        }
        case SET_PROFILE_STATUS : {
            return {
                ...state ,
                status : action.statusData
            }
        }
        default : 
            return state;
    }
}

export let createPost = (newPost) =>({type : ADD_POST, newPost})
export let setProfileData = (data) =>({type : SET_PROFILE_DATA, data})
export let setProfileStatus = (statusData) =>({type : SET_PROFILE_STATUS , statusData})

export const getProfileInfo = (id , myId) => (dispatch) =>{
    let userId = id ? id : myId
    profileAPI.getProfileInfo(userId).then(response =>{
        dispatch(setProfileData(response))
    })
}

export const getStatus = (id , myId) => (dispatch) =>{
    let userId = id ? id : myId
    profileAPI.getStatus(userId).then(response =>{
        dispatch(setProfileStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status)
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(setProfileStatus(status))
            }
        })
}

// if(!id){
//     id = 21645
// }

export default profileReducer