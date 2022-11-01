import React from "react";
import "./Phonetic.css"

export default function Phonetic(props){
return (
    <div>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer" className="audio">
             <strong>♪</strong>
            </a>
            <span className="trns">
            {props.phonetic.text}
            </span>
    </div>
);
}