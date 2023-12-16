import React from "react";
import "./Card.css";

const Card = () => {
    return (
        <section id="projecten" className="projecten">
            <ul className="cards">
                <li className="card card__first">
                    <a href="#" className="card__first--a">
                        <figure className="card__image">
                            <img src="img/Spinoza20first/Nieuwbouw Spinoza20first.jpg" alt="" />
                        </figure>
                        <span className="card__span"><b>Nieuwbouw Spinoza20first</b></span>
                    </a>
                </li>

                <li className="card card__second">
                    <a href="#" className="card__second--a">
                        <figure className="card__image">
                            <img src="img/AICS/Nieuwbouw Amsterdam International Community School Buitenveldert.jpg" alt="" />
                        </figure>
                        <span className="card__span"><b>Nieuwbouw AICS</b></span>
                    </a>
                </li>

                <li className="card card__third">
                    <a href="#" className="card__third--a">
                        <figure className="card__image">
                            <img src="img/Bostheater/Renovatie Bostheater.png" alt="" />
                        </figure>
                        <span className="card__span"><b>Renovatie Bostheater</b></span>
                    </a>
                </li>

                <li className="card card__fourth">
                    <a href="#" className="card__fourth--a">
                        <figure className="card__image">
                            <img src="img/Basisschool de Wereldburger/Nieuwbouw Basisschool De Wereldburger.jpg" alt="" />
                        </figure>
                        <span className="card__span"><b>Renovatie de Wereldburger</b></span>
                    </a>
                </li>

                <li className="card card__first">
                    <a href="#" className="card__first--a">
                        <figure className="card__image">
                            <img src="img/Verhalenhuis Nieuw-West Osdorpplein/01_CIE_Osdorp_Bibliotheek_Hero_05_Copyright_AbsentMatter2022.jpg" alt="" />
                        </figure>
                        <span className="card__span"><b>Verhalenhuis Nieuw-West Osdorpplein</b></span>
                    </a>
                </li>

                <li className="card card__second">
                    <a href="#" className="card__second--a">
                        <figure className="card__image">
                            <img src="img/Amsterdam Museum/Renovatie Amsterdam Museum.jfif" alt="" />
                        </figure>
                        <span className="card__span"><b>Renovatie Amsterdam Museum</b></span>
                    </a>
                </li>

                <li className="card card__third">
                    <a href="#" className="card__third--a">
                        <figure className="card__image">
                            <img src="img/Sportpark Goed Genoeg & AFC/Sportpark Goed Genoeg & Clubgebouw AFC.jpg" alt="" />
                        </figure>
                        <span className="card__span"><b>Sportpark Goed Genoeg & Clubgebouw AFC</b></span>
                    </a>
                </li>

                <li className="card card__fourth">
                    <a href="#" className="card__fourth--a">
                        <figure className="card__image">
                            <img src="img/Nieuwe Sporthallen Zuid/Haalbaarheidstudie Nieuwe Sporthallen Zuid.png" alt="" />
                        </figure>
                        <span className="card__span"><b>Verbouwing en Nieuwbouw Werven en Overslagpunten</b></span>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Card;
