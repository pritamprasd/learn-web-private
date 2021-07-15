import React, { useState } from 'react'
import './Gallery.css'

export default function ApiExampleTile(props) {
    const [apiId, setApiId] = useState(props.id);
    function navigateToPage(){
        console.log('Navigating to page: '+ apiId)
        props.setApiPageId(apiId)
    }
    return (
        <div className="api-example" onClick={navigateToPage}>
            <div className="api-title">
                {props.title}
            </div>
        </div>
    )
}
