import React from "react";
import "./Video.css";

const Video = (props) => {
    return (
        <section className="container">
            <div className="video-wrapper">
                <video className="video" src={props.video} controls></video>
            </div>
        </section>
    );
}

export default Video;
