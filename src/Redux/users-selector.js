export const getUsers = (state) =>{
    return state.findUsers.users
}

export const getUsersCount = (state) =>{
    return state.findUsers.usersCount
}

export const getInitialPage = (state) =>{
    return state.findUsers.initialPage
}

export const getTotalUsers = (state) =>{
    return state.findUsers.totalUsers
}

export const getIsFetching = (state) =>{
    return state.findUsers.isFetching
}

export const getPagesMargin = (state) =>{
    return state.findUsers.pagesMargin
}

export const getPagesFSize = (state) =>{
    return state.findUsers.pagesFSlice
}

export const getFollowInReq = (state) =>{
    return state.findUsers.followInReq
}