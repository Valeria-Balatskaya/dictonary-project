import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response){
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);
        let pexelsApiKey ="563492ad6f9170000100000168b1ec3275bc48258921d1bfb25a071c";
        let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization : `Bearer ${pexelsApiKey}` }
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
        
    }

    function handleSubmit(event){
        event.preventDefault();
        search()
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    function load(){
        setLoaded(true);
        search();
    }

    if (loaded){
         return (
        <div className="Dictionary">
            <section>
                <h4>Enter your word:</h4>
            <form onSubmit={handleSubmit} autoFocus="on">
                <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    );
    } else {
      load() 
      return null 
    }

}