let initialState = [
        {
            navButton : 'Profile',
            navTo : '/profile',
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
            navButton : 'Find Users',
            navTo : '/findUsers',
            class : 'finsUsers_nav_button'
        },
        {
            navButton : 'Settings',
            navTo : '/Settings',
            class : 'settings_nav_button'
        }
]
const sidebarReducer = (state = initialState, action) =>{
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer