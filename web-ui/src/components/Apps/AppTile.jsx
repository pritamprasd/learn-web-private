import './AppTile.css'
import { forwardButton } from '../utils/ReusableComponents';

import React, { useState } from 'react'

export default function AppTile(props) {
    const [app, setapp] = useState(props.app);
    return (
        <div className="app-tile">
            <h3 className="title">{props.name}</h3>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="feather feather-activity">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <button className="forward-button" onClick={() => props.renderapp(app)}>
                {forwardButton()}
            </button>           
        </div>
    )
}
