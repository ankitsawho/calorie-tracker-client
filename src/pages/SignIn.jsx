import React from 'react'
import './style/SignIn.css'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import {StoreUserData} from '../actions/index'
import axios from 'axios'

const clientId = '44255827926-nnip3qs9o1orlq4u5vka3iou9o3up6u3.apps.googleusercontent.com'

function SignIn() {
    const dispatch = useDispatch()
    const onSuccess = (res) => {
        var user =res.profileObj
        var name = user['name']
        var email = user['email']
        var data = {name: name, email: email}
        axios.post(`http://127.0.0.1:8000/api/user/`, { data })
            .then(res => {
                console.log(res);
            dispatch(StoreUserData(user))   
        })
    }
    
    const onFailure = (res) => {
        alert(res.error)
    }
    return (
    <div className='signin-container'>
        <div className="signin-box">
            <div className="signin-detail">
            <h3>Calorie Tracker</h3>
            </div>
            <div className="google-auth-container">
                <GoogleLogin
                className='google-btn'
                clientId={clientId}
                buttonText = "SignIn with Google Account"
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
                />
            </div>
        </div>
    </div>
  )
}

export default SignIn