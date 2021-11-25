const ADD_POST = 'ADDPOST'
const CHANGE_POST_TEXT = 'CHANGEPOSTTEXT'

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
        // {
        //     img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
        //     postInner : 'What are you doing now?',
        //     likes : 2,
        //     shares : 0
        // }
    ],
    userInfo : {
        img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
        firstName : 'Levon',
        secondName : 'Stepanyan',
        id : 'LeSeo',
        city : 'Ararat',
        country : 'Armenia'
    },
    newPostText : '',
}

const profileReducer = (state = initialState , action) =>{
    switch (action.type) {
        case ADD_POST:
            if(state.newPostText != ''){
                let newPost = {
                    id : state.posts[state.posts.length - 1].id++,
                    img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                    postInner : state.newPostText,
                    likes : 0,
                    shares : 0
                }
                state.posts.push(newPost)
                state.newPostText = ''
            }
            return state;
        case CHANGE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default : 
            return state;
    }
    return state
}

export let postActionCreator = () =>({type : ADD_POST})

export let newTextActionCreator = (text) =>({type : CHANGE_POST_TEXT, newText : text})

export default profileReducer