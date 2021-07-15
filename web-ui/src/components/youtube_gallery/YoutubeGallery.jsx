import { useEffect, useState } from 'react'
import './YoutubeGallery.css'
import ytchannels from "./ytchannels.json"


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
    "tech": "ffcdb2",
    "code": "e5989b",
}

export default function YoutubeGallery() {

    const[selectedTag, setSelectedTag] = useState("all")
    const[filteredChanels, setFilteredChanels] = useState(ytchannels)

    useEffect(
        () => {
            if(selectedTag !== "all"){
                setFilteredChanels(ytchannels.filter(c => c.tags.indexOf(selectedTag) > -1));
            } else{
                setFilteredChanels(ytchannels);
            }
        }
    ,[selectedTag])
    
    const handleOnTagSelect = (e) => {
        setSelectedTag(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <label for="tags">Filter by tag: </label>
            <select name="tags" id="tags-select-id" onChange={handleOnTagSelect}>
                <option value="all" selected>all</option>
                {
                    Object.keys(tagToColorMap).map(tag => <option value={tag}>{tag}</option>)
                }
            </select>
            <div className="container">
                {
                    filteredChanels.map(channel => <ChannelTile key={channel.name} channel={channel}/>)
                }
            </div>
        </div>
    )
}



const ChannelTile = (props) => {
    return(
        <div className="tile">
            <div className="logo-image">
                <img height="100px" width="100px" src={props.channel.logo} alt="logo" className="channel-logo"/>
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
    return getTag(tagToColorMap[t])

    function getTag(color) {
        return <div className="tag" ><font color={color}>{t}</font></div>
    }
}
