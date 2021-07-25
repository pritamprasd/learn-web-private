import React, { useState } from 'react';

const GithubCard = () => {
    const[profile, setProfile] = useState('')
    const[userData, setUserData] = useState(null)


    const getUserInfo = () => {
        fetch('https://github.com/'+ profile)
        .then(res => res.text)
        .then(res => setUserData(parseUserData(res)))
        .catch(err => window.alert(err))
    }

    return (
        <div className="container">
            { !userData &&
            <div>
                <input type="text" placeholder="Github Username" className="profileinput" 
                    onChange={(e)=> setProfile(e.target.value)}/>
                <button className="create-card-button" onClick={getUserInfo}>Create</button>
            </div>
            }
            {userData && <Card userdata={userData}/>}
        </div>
    );
};

const ResumeFromGithubHandle = (props) => {
    //TODO: read basic info from profile page, repository wise languages used/popular libs used, and create a skillset 
    // based on libs-used/languages-used in github public repos.
    // Version2: provide ability to log in and read from private repos too.
}

const Card = (props) => {
    // from search api:
    // followers
    // following
    // Number of repos
    // avatar
    // profile url
    // 
    // https://github.com/pritamprasd
    // Name, image, followers, following, star, logos-of-achievement, repos-number, contributions-as-image(POC), profile-link, 


    return(
        <div className="card-container">
            Card
        </div>
    );
}

const parseUserData = (response_html) => {
    console.log(response_html)
}

export default GithubCard;