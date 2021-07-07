import React, { useState } from 'react'
import get_data from './../../modules/backend_client'
import call_logout from '../../modules/backend_client'
import { Redirect } from 'react-router-dom'

export default function HomeScreen() {
    console.log('%c HomePage Loaded', 'color: orange; font-weight: bold')

    console.time('timetaken')
    let i = 0;
    while(i< 1000){i++}
    console.timeEnd('timetaken')

    const stackTrace = () => console.trace('sample stack trace ⏱ ')

    const [data, setData] =  useState('')
    const getData = () => {
        const d = get_data();
        setData(d);
    }
    const logout = () => {
        call_logout()
    }
    const redirToLoginPage = () => {
        window.location.replace('/login')
    }
    const gotoGallery = () => {
        window.location.replace('/gallery')
    }
    return (
        <div>
            <button className="login-button" onClick={redirToLoginPage}>Login</button>
            <button className="login-button" onClick={getData}>Get Data</button>
            <button className="login-button" onClick={logout}>Logout</button>
            <button className="login-button" onClick={gotoGallery}>Gallery</button>
            <h4>Data:</h4>
            <p>{data}</p>
        </div>
    )
}
