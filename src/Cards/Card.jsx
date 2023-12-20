import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("data/projects.json")
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <section id="projecten" className="projecten">
            <ul className="cards">
                {projects.map(project => (
                    <li key={`card-${project.id}`} className="card card__first">
                        <Link to={`/Projectpagina/${project.id}`} className="card__first--a">
                            <figure className="card__image">
                                <img src={project.imageSrc} alt="" />
                            </figure>
                            <span className="card__span"><b>{project.title}</b></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Card;
