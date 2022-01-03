const ADD_POST = 'ADDPOST'
const CHANGE_POST_TEXT = 'CHANGEPOSTTEXT'
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'

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
    newPostText : '',
}

const profileReducer = (state = initialState , action) =>{
    switch (action.type) {
        case ADD_POST:{
                let newPost = {
                    id : state.posts[state.posts.length - 1].id + 1,
                    img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                    postInner : state.newPostText,
                    likes : 0,
                    shares : 0
                }
                return {
                    ...state,
                    posts : [...state.posts, newPost],
                    newPostText : ''
                }
        }
        case CHANGE_POST_TEXT:{
            return {
                ...state,
                newPostText : action.newText
            };
        }
        case SET_PROFILE_DATA:{
            return {
                ...state,
                userInfo : {...action.data}
            }
        }
        default : 
            return state;
    }
}

export let postActionCreator = () =>({type : ADD_POST})
export let setProfileData = (data) =>({type : SET_PROFILE_DATA, data})
export let newTextActionCreator = (text) =>({type : CHANGE_POST_TEXT, newText : text})

export default profileReducer