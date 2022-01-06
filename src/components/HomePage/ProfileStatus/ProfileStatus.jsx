import React, { createRef } from 'react'
import c from './ProfileStatus.module.css'

class ProfileStatus extends React.Component{

    state = {
        editMode : false,
        status : this.props.status
    }

    enableEditMode = () =>{
        this.setState({
            editMode : true,
        })
    }

    componentDidUpdate(prevProps , prevState){ 
        if(prevProps.status !== this.props.status){
            this.setState({
                status : this.props.status
            })
        }
    }

    disableEditMode = (status) =>{
        this.props.updateStatus(status)
        this.setState({
            editMode : false
        })
    }

    changeStatus = (newStatus) =>{
        this.setState({
            status : newStatus
        })
    }

    render(){
        return <>
            <div>
                {this.state.editMode ? 
                    <div>
                        <input autoFocus onBlur={(e) =>{  
                                this.disableEditMode(this.state.status);                          
                            }} 
                            type="text" value={this.state.status} 
                            onChange={(e) =>{
                                this.changeStatus(e.target.value)
                            }}
                        />
                    </div> :
                    <div className={c.aboutUser}>
                        <span onDoubleClick={() =>{this.enableEditMode()}}>{this.state.status}<i className="fas fa-pen"></i></span>
                    </div>
                }  
            </div>
        </>
    }
}

export default ProfileStatus