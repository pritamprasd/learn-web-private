import React from 'react';
import './LoginScreen.scss';
import do_login from './../../modules/backend_client'

export default function LoginScreen() {
    const handleLogin = () => {
        console.log('Login button clicked');
        do_login()
    }
    return (
        <div>
            <button className="login-button" onClick={handleLogin}>Login with Google</button>
        </div>
    )
}
