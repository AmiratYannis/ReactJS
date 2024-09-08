import React from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import Movies from './Movies';


const Home = () => {
    return (
        <div>
            <Navigation/>
            
            <h1>Présentation</h1>

            <p>Voici une selection des films et séries les plus regardés</p>
            <Movies/>
        </div>

    );
};

export default Home;