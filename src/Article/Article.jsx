import React from "react";
import "./Article.css";

const Article = (props) => {
    return (
        <article className="article__tekst">
            <h1 className="article__tekst--h1">{props.titel}</h1>
            <p className="article__tekst--p">
                {props.tekst1}
            </p>
            <br></br>
            <p className="article__tekst--p">
                {props.tekst2}
            </p>
            <br></br>
            <p className="article__tekst--p">
                {props.tekst3}
            </p>
            <a className="article__tekst--a" href={props.href}>{props.linknaam}</a>
        </article>
    );
}

export default Article;
