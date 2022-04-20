import React from "react";
import ListGif from '../../data/gif';
import Gif from '../../components/GIF';

const Search = () => {
    return (
        <>
            <div>
                <input placeholder="Search..."/>
                <button>Search</button><br></br>
            </div>
            {ListGif.filter((data) => data.rating==="g").map((gif) => (
                <Gif key={gif.id} {...gif} />
            ))}
        </>
    );
}

export default Search;