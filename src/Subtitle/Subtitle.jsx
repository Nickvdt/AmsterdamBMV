import React from "react";
import "./Subtitle.css";

const Subtitle = (props) => {
    return (
        <h3 className="subtitle__h3">
            {props.titel}
        </h3>
    );
}

export default Subtitle;
