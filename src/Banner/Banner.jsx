import React from "react";
import "./Banner.css";

const Banner = (props) => {
    return (
        <figure className="banner">
            <img className="banner__img" src={props.banner} alt="Banner image" />
        </figure>
    );
}

export default Banner;
