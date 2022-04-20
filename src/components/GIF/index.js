import React from "react";
function Gif({url, title}) {
    return (
        <>
            <h3>{title}</h3>
            <img src={url} alt="gif" />
        </>
    )
}

export default Gif;