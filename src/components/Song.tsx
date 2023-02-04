import React, { useRef, useState } from "react";

export interface Props{
  song?:{
    name?:string;
    lyrics?:string;
    videoLink?:string;
  }
  index?:string|number
}

const Song:React.FC<Props> = ({ song, index }) => {
  const { name, lyrics, videoLink } = song;
  const [isClick, setIsClick] = useState(false);
  const contentEl = useRef();

  const handleToggle = () => {
    setIsClick(!isClick);
  };

  return (
    <li className={`para ${isClick ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {index}. &nbsp; {name}
        <span className="control">{isClick ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="lyrics_wrapper"
        style={
          isClick
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >

        <div className="lyrics">
          {videoLink && <a href={videoLink} target="_blank" rel="noreferrer">Video link<br /></a>}
          {lyrics}
        </div>
      </div>
    </li>
  );
};

export default Song;