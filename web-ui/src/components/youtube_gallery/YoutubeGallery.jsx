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
            {props.channel.name}
        </div>
    )
}