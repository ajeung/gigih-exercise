import React, { useState } from "react";
import Gif from "../../components/GIF/index";
import Button from "@mui/material/Button";

function Search() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    const getDataGif = async () => {
        if (query === ""){
            console.log("aa")
            return
        }
        const Key = "n7TXChyeL52mh1OCJ1HX11sdCKTOYjoy"
        const gif = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${Key}&q=${query}&limit=${12}`).then(response => response.json());
        setData(gif.data);
    }

    const handleInput = (e) => {
        e.preventDefault();
        setQuery(prevState => (prevState = e.target.value))
    }

    return (
        <>
            <div className="layout">
                <input onChange={(e) => handleInput(e)} type="text" placeholder="Search gif ..."/><br></br><br></br>
                <Button variant="contained" onClick={getDataGif}>Search</Button>
            </div>
            <div className="ListGif">
                {data.map((gif, index) => <Gif key={index} url={gif.images.fixed_width.url} title={gif.title} />)}
            </div>
        </>
    )
}

export default Search