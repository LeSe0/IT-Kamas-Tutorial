import React from 'react'
import c from '../Login.module.css'
import {reduxForm, Field} from 'redux-form'
import { Input } from '../../common/FormControl'
import { required} from '../../../utils/validators/validator'

function LoginForm(props){
    return <>
    <div className={c.loginForm}>    
        {props.error ? <div className={c.formSummaryError}>{props.error}</div> : <div></div>}
        <form onSubmit={props.handleSubmit}>
                <div className={c.login}>
                    <Field type="text" id="usid" name="login" placeholder="Email or Phone" component = {Input}
                            validate = {[required]} icon = 'fas fa-user'/> 
                </div>
                <div className={c.passwordhead}>
                    <Field type="password" id="password" name="password" placeholder="Password" component = {Input} 
                            validate = {[required]} icon = 'fas fa-lock'/>
                </div>	
                <div className={c.forgotPassword}>	
                    <label htmlFor="rememberme">    
                        <a href="#" className={c.forgot}>Forgot password?</a>
                        <Field type="checkbox" id="rememberme" name="rememberme" component = {'input'}/>
                        <span className={c.remember}>Remember me?</span>
                    </label>			
                </div>
                <div className={c.loginButton}>
                    <span className={c.loginbutton}><button className={c.loggin}>Login</button></span>
                </div>
            </form>
    </div>
    </>
}

export default reduxForm({
    form : 'loginForm'
})(LoginForm)