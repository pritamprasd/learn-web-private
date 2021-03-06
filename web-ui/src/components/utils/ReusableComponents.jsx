function backButton(){
    return(
        <svg width="48" height="48" viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="back-button-svg">
                <path id="back-button-border" d="M81.5 40C81.5 61.2114 63.6439 78.5 41.5 78.5C19.3561 78.5 1.5 61.2114 1.5 40C1.5 18.7886 19.3561 1.5 41.5 1.5C63.6439 1.5 81.5 18.7886 81.5 40Z" strokeWidth="3"/>
                <path id="back-bitton-arrow" d="M41 17L17 41.5M17 41.5L41 64.5M17 41.5H72.5" strokeWidth="3"/>
            </g>
        </svg>
    )
}

function forwardButton(){
    return(
        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="forward-button" d="M0 24.8471H48M48 24.8471L26.7352 49M48 24.8471L26.7352 1" stroke-width="3"/>
        </svg>
    )
}

export {backButton, forwardButton}
