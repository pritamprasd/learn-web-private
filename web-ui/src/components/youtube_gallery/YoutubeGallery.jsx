import { useEffect, useState } from "react";
import "./YoutubeGallery.css";
import ytchannels from "./ytchannels.json";
import tagToColorMap from "./tags.json";

export default function YoutubeGallery() {
  const [selectedTag, setSelectedTag] = useState("all");
  const [filteredChanels, setFilteredChanels] = useState(ytchannels);

  useEffect(() => {
    if (selectedTag !== "all") {
      setFilteredChanels(
        ytchannels.filter((c) => c.tags.indexOf(selectedTag) > -1)
      );
    } else {
      setFilteredChanels(ytchannels);
    }
  }, [selectedTag]);

  const handleOnTagSelect = (e) => {
    setSelectedTag(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <label for="tags">Filter by tag: </label>
      <select name="tags" id="tags-select-id" onChange={handleOnTagSelect}>
        <option value="all" selected>all</option>
        {Object.keys(tagToColorMap).map((tag) => (
          <option value={tag}>{tag}</option>
        ))}
      </select>
      <div className="container">
        {filteredChanels.map((channel) => (
          <ChannelTile
            key={channel.name}
            channel={channel}
            updateTag={setSelectedTag}
          />
        ))}
      </div>
    </div>
  );
}

const ChannelTile = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    (!clicked && (
      <div className="tile" onClick={() => setClicked(true)}>
        <div className="logo-image">
          <img
            height="84px"
            width="84px"
            src={props.channel.logo}
            alt="logo"
            className="channel-logo"
          />
        </div>
        <div className="channel-title">{props.channel.name}</div>
        <div className="channel-description">{props.channel.description}</div>
        <div className="channel-why">{props.channel.why}</div>
        <div className="channel-link">
          <a href={props.channel.link}>visit channel</a>
        </div>
        <div className="channel-tags">
          {props.channel.tags.map((t) => (
            <Tag name={t} updateTag={props.updateTag} />
          ))}
        </div>
      </div>
    )) ||
    (clicked && <div className="logo-tile" onClick={() => setClicked(false)}>
        <img
            height="240px"
            width="240px"
            src={props.channel.logo}
            alt="logo"
            className="channel-logo"
        />
    </div>)
  );
};

const Tag = (props) => {
  const [name, _] = useState(props.name);
  function handleTagClick(e) {
      e.stopPropagation();
    props.updateTag(name);
  }
  return (
    <div className="tag" onClick={handleTagClick}>
      <font color={tagToColorMap[name]}>{name}</font>
    </div>
  );
};
