import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Logo from './Logo';
import Movies from './Movies';


const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            
            <h1>Présentation</h1>

            <p>Voici une selection des films et séries les plus regardés</p>
            <Movies/>
        </div>

    );
};

export default Home;