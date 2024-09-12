import React from 'react'
import Navigation from '../Navigation/Navigation';
import "./About.css"
import Logo from '../Navigation/Logo/Logo';

const About = () => {
    return (
        <div>
            <Navigation />
            <h1>A propos</h1>
            <br />
            <p>
                Bonjour, je m'appelle Yannis Amirat. Je suis développeur web, passionné de nouvelles technologies. j'aime aussi regarder des films, séries et mangas durant mon temps libre.
                Mon objectifs à travers ce projet serait de me former sur le React JS pour pouvoir etre opérationnel et l'utiliser lors de mes prochaines expériences.
            </p>
            <div className="linkedin">
                <a className="transition text-gray-200 hover:text-gray-400" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/yannis-amirat-968386175/">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="svg-inline--fa fa-linkedin-in fa-w-14 fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </a>
            </div>

        </div>
    );
};





export default About;