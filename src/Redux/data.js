import dialogReducer from "./dialog-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from './sidebar-reducer'

let store = {
    _data : {
        homePage : {
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
                newPostText : '',
        },
        dialogsPage : {
            persons : [
                {
                    id : 0,
                    name : 'Levon',
                },
                {
                    id : 1,
                    name : 'Aram'
                },
                {
                    id : 2,
                    name : 'Arman'
                },
                {
                    id : 3,
                    name : 'Naruto'
                },
                {
                    id : 4,
                    name : "Itachi"
                },
                {
                    id : 5,
                    name : 'Hermione'
                }
            ],
            dialog : {
                // {
                //     personId : 0,
                //     messages : [
                //         {
                //             message : 'Hi',
                //             img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                //             time : '02:35 PM'
                //         },
                //         {
                //             message : 'How are you?',
                //             img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                //             time : '06:56 PM'
                //         },
                //         {
                //             message : 'What is your name?',
                //             img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                //             time : '08:15 PM'
                //         },
                //         {
                //             message : 'Bye Bye',
                //             img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                //             time : '10:09 PM'
                //         }
                //     ]
                // },
                // personId : 5,
                messages : [
                    {
                        id : 1,
                        message : 'Yes , its my bad',
                        img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                        time : '01:35 PM'
                    },
                    {
                        id : 2,
                        message : 'Leviosa not leviosaaa!',
                        img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                        time : '02:00 PM'
                    },
                    {
                        id : 3,
                        message : 'Dont eat much Ron',
                        img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                        time : '02:01 PM'
                    },
                    {
                        id : 4,
                        message : 'Hi Harry!',
                        img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                        time : '04:00 PM'
                    }
                ]
            },
            newMessageText : ''
        },
        navbar : [
            {
                navButton : 'Home',
                navTo : '/Home',
                class : 'home_nav_button'
            },
            {
                navButton : 'Messages',
                navTo : '/Dialogs',
                class : 'message_nav_button'
            },
            {
                navButton : 'Music',
                navTo : '/Music',
                class : 'music_nav_button'
            },
            {
                navButton : 'News',
                navTo : '/News',
                class : 'news_nav_button'
            },
            {
                navButton : 'Settings',
                navTo : '/Settings',
                class : 'settings_nav_button'
            }
        ],
        userInfo : {
            img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
            firstName : 'Levon',
            secondName : 'Stepanyan',
            id : 'LeSeo',
            city : 'Ararat',
            country : 'Armenia'
        }
    },

    getData(){
        return this._data
    },

    _rerenderEntireTree(props){},

    subscribe (observer){
        this._rerenderEntireTree = observer
    },

    dispatch(action){
        this._data.homePage = profileReducer(this._data.homePage , action)
        this._data.dialogsPage = dialogReducer(this._data.dialogsPage, action)
        this._data.navbar = sidebarReducer(this._data.navbar , action)
        this._rerenderEntireTree(this._data)
    }
}

export default store