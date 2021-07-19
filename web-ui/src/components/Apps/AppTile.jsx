import './AppTile.css'
import { forwardButton } from '../utils/ReusableComponents';

import React, { useState } from 'react'

export default function AppTile(props) {
    const [app, setapp] = useState(props.app);
    return (
        <div className="app-tile">
            <h3>{props.name}</h3>
            <button className="forward-button" onClick={() => props.renderapp(app)}>
                {forwardButton()}
            </button>           
        </div>
    )
}
