import * as axios from "axios";
import React from "react";
import c from './Users.module.css'

class Users extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.initialPage}&count=${this.props.usersCount}`).then(response =>{
            this.props.setUsersTotal(response.data.totalCount)
            this.props.setUsers(response.data.items);
        })
    }

    changePage(page){
        this.props.selectPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCount}`).then(response =>{
            this.props.setUsersTotal(response.data.totalCount)
            this.props.setUsers(response.data.items);
        })
    }

    render(){
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.usersCount);

        let pages = [];

        for(let i = 1 ; i <= pagesCount ; i++){
            pages.push(i)
        }

        return (
            <div className = {c.users_container}>
                <div className = {c.pagesCountContainer}>
                    <div className = {`${c.leftArrows} ${c.arrows}`}>
                        <span onClick = {() =>{
                            this.changePage(1)
                        }}> <i class="fas fa-angle-double-left"></i> </span>
                        <span onClick = {() =>{
                            this.props.initialPage - 1 < 1 ? this.changePage(pagesCount) : this.changePage(this.props.initialPage - 1)
                        }}> <i className = "fas fa-angle-left" ></i> </span>
                    </div>
                    <div className = {c.pagesContainer}>
                        {pages.map(el =>{
                            return <span className = {this.props.initialPage === el ? `${c.selectedPage} ${c.page}` : `${c.disablePage} ${c.page}`} 
                            onClick ={() =>{
                                this.changePage(el)
                            }}>{el}</span>
                        })}
                    </div>
                    <div className = {`${c.rightArrows} ${c.arrows}`}>
                        <span onClick = {() =>{
                            this.props.initialPage + 1 > pagesCount ? this.changePage(1) :  this.changePage(this.props.initialPage + 1)
                        }}> <i class="fas fa-angle-right"></i> </span>
                        <span onClick = {() =>{
                            this.changePage(pagesCount)
                        }}> <i class="fas fa-angle-double-right"></i> </span>
                    </div>
                </div>
                <span className = {c.currentPage}>You're in {this.props.initialPage} page</span>
                {this.props.users.map((el , i) =>{
                    return (
                        <div className={c.user}>
                            <div className={c.firstPart}>
                                <div className = {c.img}><img className = {c.avatar}
                                    src = {el.photos.small == null ? 
                                    'https://www.pngarts.com/files/11/Avatar-PNG-High-Quality-Image.png' : el.photos.small}/>
                                </div>
                                <button className = {el.followed == true ? c.unFollow : c.follow}
                                        onClick = {() =>{
                                            el.followed == true ? this.props.unFollowAC(el.id) : this.props.followAC(el.id)
                                        }}
                                    >
                                    {el.followed == true ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>
                            <div className = {c.secondPart}>
                                <div className = {c.personInfo}>
                                    <div className={c.userName}>{el.name}</div>
                                    <div className = {c.comment}>{el.status}</div>
                                </div>
                                <div className = {c.location}>
                                    <div className = {c.country}>Armenia,</div>
                                    <div className = {c.city}>Ararat</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users