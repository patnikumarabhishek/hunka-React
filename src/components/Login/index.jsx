import React, { useState, useEffect } from 'react'
import {
    Link
} from 'react-router-dom'
import Cookies from 'js-cookie'
import { connect } from 'react-redux';
import { userActions } from '../../actions/userActions'
import { permissionActions } from '../../actions/permissionActions'
import { roleActions } from '../../actions/roleActions'
import { clientActions } from '../../actions/clientActions';
import { useHistory } from 'react-router';

const Login = (props) => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, getuserProfileData, getPermissions, getClients, getRoles, token, status } = props

    useEffect(() => {
        if (token.length !== 0) {
            Cookies.set('token', token)
            console.log('token',token.length)
            getuserProfileData(token)
            getPermissions(token)
            getRoles(token)
            getClients(token)
        }
    },[token])

    useEffect(() => {
        if (status === 'SUCCESS') {
            history.push('/')
        }
    },[status])

    const loginHandler = (e) => {
        e.preventDefault()
        console.log('login clicked')
        console.log(email,password)
        login(email, password)
    }

    return (
        <section className="middle_wraper">
            <div className="login_page">
                <div className="container">
                    <div className="card">
                        <h1 className="card-title">Login </h1>
                        <form className="card-form">
                            <label htmlFor="username">Username</label>
                            <div className="card-input-container username">
                                <div className="" style={{position: "absolute", left: "8px", top: "11px"}}><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                <input type="text" placeholder="Enter your username" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <label htmlFor="password">Password</label>
                            <div className="card-input-container password">
                                <div className="" style={{position: "absolute", left: "8px", top: "11px"}}><i className="fa fa-lock" aria-hidden="true"></i></div>
                                <input type="password" placeholder="Enter your password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>
                            <button className="card-button" onClick={loginHandler}>Sign In</button>
                            <small className="card-forgot-password">Forgot your passwrod ? <a href="#">Reset Password</a></small>
                            <small className="card-forgot-password">Don't have an account? <Link to='/register'>Sign up </Link></small>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

function mapStateToProps(state) {
    const { token, status } = state.user;
    return { token,status };
}

const mapActionsToProps = {
    login: userActions.login,
    getPermissions: permissionActions.getPermissions,
    getRoles: roleActions.getRoles,
    getuserProfileData: userActions.getuserProfileData,
    getClients: clientActions.getClients
};

const connectedLoginPage = connect(mapStateToProps, mapActionsToProps)(Login);
export { connectedLoginPage as Login };
