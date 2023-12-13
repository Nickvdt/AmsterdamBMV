import React from "react";
import "./Article.css";

const Article = (props) => {
    return (
        <article className="article__tekst">
            <h1 className="article__tekst--h1">{props.titel}</h1>
            <p className="article__tekst--p">
                {props.tekst1}
            </p>
            <p className="article__tekst--p">
                {props.tekst2}
            </p>
            <p className="article__tekst--p">
                {props.tekst3}
            </p>
        </article>
    );
}

export default Article;
