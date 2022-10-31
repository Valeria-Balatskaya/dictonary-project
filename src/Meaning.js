import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
return(
    <div className="Meaning">
         <Synonyms synonyms={props.meaning.synonyms} />
        <h3>
          {props.meaning.partOfSpeech}  
        </h3>
        {props.meaning.definitions.map(function (definition, index){
            return (
                <div key={index} className="info">
                        <strong>Definition:</strong>
                     <div>{definition.definition}</div>
                    <em> 
                    <div className="example">{definition.example}</div>
                    </em>
                    <br />
                </div>
            );
        })}
    </div>
);
}