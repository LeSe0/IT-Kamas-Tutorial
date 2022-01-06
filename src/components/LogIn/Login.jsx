import React from 'react'
import c from './Login.module.css'
import {reduxForm} from 'redux-form'
import LoginForm from './LoginForm/LoginForm'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

function Login(props){
    let onSubmit = (formData) => {
        props.login(formData.login , formData.password , formData.rememberme);
    }

    if(props.isAuth){
        return <Redirect to = 'profile' />
    }

    return (
        <div className={c.loginPage}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login