import React from "react";
import "./Slideshow.css";

const Slideshow = (props) => {
    return (
        <section class="container">
            <div class="slider-wrapper">
                <div class="slider">
                    <img id="slide-1" src={props.img1} alt="projecten image" />
                    <img id="slide-2" src={props.img2} alt="projecten image" />
                    <img id="slide-3" src={props.img3} alt="projecten image" />
                    
                </div>
                <div class="slider-nav">
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-3"></a>
                </div>
            </div>
        </section>
    );
}

export default Slideshow;
