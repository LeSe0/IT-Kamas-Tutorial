import React from 'react'
import { useEffect, useState, useRef} from 'react'
import c from './ProfileStatus.module.css'

function ProfileStatus(props){
    let [editMode , setEditMode] = useState(false)
    let [status , setStatus] = useState(props.status)
    let prevStatus = usePrevious(props.status)

    let enableEditMode = () =>{
        setEditMode(true)
    }

    useEffect(() =>{
        if(prevStatus !== props.status){
            setStatus(props.status)
        }
    })

    let disableEditMode = (status) =>{
        props.updateStatus(status);
        setEditMode(false)
    }

    let changeStatus = (newStatus) =>{
        setStatus(newStatus)
    }

    return <>
        <div>
            {editMode ? 
                <div>
                    <input autoFocus onBlur={(e) =>{  
                            disableEditMode(status);                          
                        }} 
                        type="text" value={status} 
                        onChange={(e) =>{
                            changeStatus(e.target.value)
                        }}
                    />
                </div> :
                <div className={c.aboutUser}>
                    <span onDoubleClick={() =>{enableEditMode()}}>{status}<i className="fas fa-pen"></i></span>
                </div>
            }  
        </div>
    </>
}

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default ProfileStatus


// class ProfileStatus extends React.Component{

//     state = {
//         editMode : false,
//         status : this.props.status
//     }

//     enableEditMode = () =>{
//         this.setState({
//             editMode : true,
//         })
//     }

//     componentDidUpdate(prevProps , prevState){ 
//         if(prevProps.status !== this.props.status){
//             this.setState({
//                 status : this.props.status
//             })
//         }
//     }

//     disableEditMode = (status) =>{
//         this.props.updateStatus(status)
//         this.setState({
//             editMode : false
//         })
//     }

//     changeStatus = (newStatus) =>{
//         this.setState({
//             status : newStatus
//         })
//     }

//     render(){
//         return <>
//             <div>
//                 {this.state.editMode ? 
//                     <div>
//                         <input autoFocus onBlur={(e) =>{  
//                                 this.disableEditMode(this.state.status);                          
//                             }} 
//                             type="text" value={this.state.status} 
//                             onChange={(e) =>{
//                                 this.changeStatus(e.target.value)
//                             }}
//                         />
//                     </div> :
//                     <div className={c.aboutUser}>
//                         <span onDoubleClick={() =>{this.enableEditMode()}}>{this.state.status}<i className="fas fa-pen"></i></span>
//                     </div>
//                 }  
//             </div>
//         </>
//     }
// }