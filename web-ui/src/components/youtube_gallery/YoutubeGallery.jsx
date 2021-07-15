import React, { useEffect, useState } from 'react'
import './YoutubeGallery.css'
import ytchannels from "./ytchannels.json"

export default function YoutubeGallery() {
    return (
        <div className="container">
            {
                ytchannels.map(channel => <ChannelTile key={channel.name} channel={channel}/>)
            }
        </div>
    )
}


const ChannelTile = (props) => {
    return(
        <div className="tile">
            <div className="logo-image">
                <img src={props.channel.logo} alt="logo" className="channel-logo"/>
            </div>
            <div className="channel-title">
                {props.channel.name}
            </div>
            <div className="channel-description">
                {props.channel.description}
            </div>
            <div className="channel-why">
                {props.channel.why}
            </div>
            <div className="channel-link">
                <a href={props.channel.link}>visit channel</a>
            </div>
            <div className="channel-tags">
                {props.channel.tags.map(t => createTag(t))}
            </div>
        </div>
    )
}

function createTag(t) {
    const tagToColorMap = {
        "science": "bacc13",
        "math": "f94144",
        "cryptography": "f3722c",
        "animation": "f9844a",
        "physics": "f9c74f",
        "psychology": "90be6d",
        "history": "43aa8b",
        "human": "4d908e",
        "stories": "577590",
        "living": "277da1",
        "travel": "f3722c",
        "culture": "f3722c",
        "world": "f3722c",
        "biotech": "f3722c",
    }
    return getTag(tagToColorMap[t])

    function getTag(color) {
        return <div className="tag" ><font color={color}>{t}</font></div>
    }
}
