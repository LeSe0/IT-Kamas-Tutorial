import React from 'react'
import c from './MessageForm.module.css'
import cs from '../Messages.module.css'
import {reduxForm, Field} from 'redux-form'
import { maxLengthCreator, required } from '../../../../../utils/validators/validator'
import { TextArea } from '../../../../common/FormControl'

let maxLength = maxLengthCreator(300)

function MessageForm(props){
    return (
        <form className = {`${c.messageForm} ${cs.messageForm}`} onSubmit = {props.handleSubmit}>
            <Field 
                name = 'newMessage'
                placeholder = 'Wanna say anything to your friend?'
                validate = {[required , maxLength]}
                component = {TextArea} />
        </form>
    )
}

export default reduxForm({
    form : 'messageForm'
})(MessageForm)