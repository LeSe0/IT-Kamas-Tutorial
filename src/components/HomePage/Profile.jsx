import '../../App.css'
import c from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer'
import ProfileStatus from './ProfileStatus/ProfileStatus'

function Profile(props){ 

    let newPost = (data) =>{
        props.createPost(data.postText)
    }

    return (
        <div className = {c.content}>
            <div className = {c.wallpaperChoose}>Choose your wallpaper</div>
            <div className = {c.userInfo}>
                <div className={c.userInfoFPart}>
                    <img src={props.photos.small} alt="" className = {c.profilePhoto}/>
                    <div className={c.fullName}>{props.name}</div>
                    <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
                </div>
                <div className={c.userInfoSPart}>
                    <div className={c.title}>Info Part</div>
                    <div className={c.text}>{props.aboutMe}</div>
                    <div className={`${c.jobSearch} ${c.text}`}>
                        Looking for a job : <i className={props.lookingForAJob === true ? `fas fa-lightbulb ${c.green}` 
                        : `fas fa-lightbulb ${c.red}`}></i>
                    </div>
                    <div className={`${c.jobDescription} ${c.text}`}>
                        {props.lookingForAJobDescription}
                    </div>
                    <div className={c.contacts}>
                    <div className={c.title}>Contacts</div>
                        <div className={c.contactsContainer}>
                            {Object.entries(props.contacts).map((el , i) =>{
                                return <>
                                    <a href={el[1] != null ? el[1].includes('https://') == false ? `https://${el[1]}` : `${el[1]}` : null} target='_blank' className={c.contact}>
                                        <i className={`fab fa-${el[0]}`}></i>
                                    </a>
                                </>
                            })}
                        </div>
                    </div>
                </div>
                </div>
            <div className = {c.posts}>
                <PostsContainer onSubmit={newPost}/>
            </div>
        </div>   
    )
}

export default Profile