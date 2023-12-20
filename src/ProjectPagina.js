import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header/Header';
import Navigatie from './Navigatie/Navigatie';
import Banner from './Banner/Banner';
import Article from './Article/Article';
import Slideshow from './Slideshow/Slideshow';
import Footer from './Footer/Footer';

function Projectpagina() {
    const [project, setProject] = useState({});
    const { projectId } = useParams();

    useEffect(() => {
        fetch(`../data/projects.json`)
            .then(response => response.json())
            .then(data => {
                const selectedProject = data.find(project => project.id === parseInt(projectId)); // Verander 'id' naar 'projectId'
                setProject(selectedProject);
            })
            .catch(error => console.error("Error fetching project data:", error));
    }, [projectId]);
    
    return (
        <main className="App">
            <Header></Header>
            <Navigatie></Navigatie>
            <Banner
            banner="../img/Amsterdam.webp"
            ></Banner>
            <Article
                titel={project.title}
                tekst1={project.tekst1}
                tekst2={project.tekst2}
                tekst3={project.tekst3}
                linknaam={project.linknaam}
                href={project.href}
            />
            <Slideshow
                img1={project.img1}
                img2={project.img2}
                img3={project.img3}
            >
            </Slideshow>
            <Footer></Footer>
        </main>
    );
}

export default Projectpagina;
