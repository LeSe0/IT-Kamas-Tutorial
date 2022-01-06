export const getUserInfo = (state) =>{
    return {...state.homePage.userInfo}
}

export const getContactIcons = (state) =>{
    return state.homePage.contactIcons
}

export const getLoggedStatus = (state) =>{
    return state.homePage.status
}

export const getLoggedUserId = (state) =>{
    return state.auth.id
}

export const getPosts = (state) =>{
    return state.homePage.posts
}