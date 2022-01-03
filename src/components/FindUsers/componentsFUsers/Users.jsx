import React from "react";
import c from './Users.module.css'
import Pagination from './componentsUsers/UsersPagination/UsersPagination';
import UsersRender from './componentsUsers/UsersRender/UsersRender';
import PaginationPageInfo from './componentsUsers/PaginationPageInfo/PaginationPageInfo';

function Users(props){
    
    let pagesCount = Math.ceil(props.totalUsers / props.usersCount);

    return (
        <div className = {c.users_container}>
            <div className = {c.pagination}>
                <PaginationPageInfo 
                    totalUsers = {props.totalUsers}
                    initialPage = {props.initialPage}
                    pagesCount = {pagesCount}/>
                <Pagination 
                    initialPage = {props.initialPage}
                    changePage = {props.changePage}
                    totalUsers = {props.totalUsers}
                    usersCount = {props.usersCount}
                    pagesCountOS = {props.pagesCountOS}
                    pagesMargin = {props.pagesMargin}
                    pagesCount = {pagesCount}/>
            </div>
            <div className = {c.usersContainer}>
                <UsersRender 
                    follow = {props.follow}
                    unfollow = {props.unFollow}
                    users = {props.users}
                    followingInProcess = {props.followingInProcess}
                    followInReq = {props.followInReq}/>
            </div>
            </div>
    )
}

export default Users