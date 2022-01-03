import * as axios from "axios";
import { followingInProcess } from "../Redux/fUsers-reducer";

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers : {
        'API-KEY' : '3a59a429-9ebf-46be-ae4f-0dbc38ad7d4a'
    },
})

export const usersAPI = {
    getUsers(initialPage , usersCount){
        return instance.get(`users?page=${initialPage}&count=${usersCount}`)
                .then(response =>{
                    return response.data
                })
    },
    getUserInfo(userId){
        return instance.get(`profile/${userId}`)
                .then(response =>{
                    return response.data
        })
    },
    auth(){
        return instance.get(`auth/me`)
                .then(response =>{
                    return response.data
                })
    }
} 

export const followAPI = {
    followRequest(id, toggleIsFollowing){
        toggleIsFollowing(true , id)
        return instance.post(`follow/${id}`).then(response =>{
            return response.data
        })
    },
    unfollowRequest(id, toggleIsFollowing){
        toggleIsFollowing(true , id)
        return instance.delete(`follow/${id}`).then(response =>{
            return response.data
        })
    }
}