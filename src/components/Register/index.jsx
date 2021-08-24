import React, { useState, useEffect } from 'react'
import {
    Link
} from 'react-router-dom'
import Cookies from 'js-cookie'
import { connect } from 'react-redux';
import { userActions } from '../../actions/userActions'
import { useHistory } from 'react-router';

const Register = (props) => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')

    const { register, token, status } = props

    useEffect(() => {
        Cookies.set('token', token)
    },[token])

    useEffect(() => {
        if (status === 'SUCCESS') {
            history.push('/')
        }
    },[status])
    
    const signUpHandler = (e) => {
        e.preventDefault()
        console.log('sign up clicked')
        console.log(name,email,mobile,password)
        const payload = {
            name,
            email,
            mobile,
            password
        }
        register(payload)
    }

    return (
        <section className="middle_wraper">
            <div className="login_page">
                <div className="container">
                    <div className="card">
                        <h1 className="card-title">Register </h1>
                        <form className="card-form">
                            <label htmlFor="username">Full Name </label>
                            <div className="card-input-container username">
                                <div className="" style={{position: "absolute", left: "8px", top: "11px"}}><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                <input type="text" placeholder="Enter your Name " onChange={(e) => setName(e.target.value)} value={name} />
                            </div>

                            <label htmlFor="username">Email  </label>
                            <div className="card-input-container username">
                                <div className="" style={{position: "absolute", left: "8px", top: "11px"}}><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                <input type="Email" placeholder="Enter your Email " onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <label htmlFor="username">Mobile Number  </label>
                            <div className="card-input-container username">
                                <div className="" style={{position: "absolute", left: "8px", top: "11px"}}><i className="fa fa-phone" aria-hidden="true"></i></div>
                                <input type="Email" placeholder="Enter your Mobile Number " onChange={(e) => setMobile(e.target.value)} value={mobile} />
                            </div>

                            <label htmlFor="password">Password</label>
                            <div className="card-input-container password">
                                <div className="" style={{position: "absolute", left: "8px", top: "11px"}}><i className="fa fa-lock" aria-hidden="true"></i></div>
                                <input type="password" placeholder="Enter your password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>
                            <button className="card-button" onClick={signUpHandler}>Sign Up</button>
                            <small className="card-forgot-password">Have an Account?  <Link to='/login'>Log In Here </Link></small>
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
    register: userActions.register
};

const connectedRegisterPage = connect(mapStateToProps, mapActionsToProps)(Register);
export { connectedRegisterPage as Register };
