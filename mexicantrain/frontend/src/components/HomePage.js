import React, { Component } from "react";
import { render } from "react-dom";
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/home.css";
import Game from '../../static/images/game.png';

const HomePage = () => {


        return (
            <div className="container">
                <div className="large-text"> MEXICAN TRAIN: DOMINOES GAME </div>
                    <div className="small-container">
                        <p className="small-paragraph"> Welcome to our platform dedicated to Mexican Train, where the thrill of friendly competition meets the strategic 
                        depths of dominoes! TrenDB offers an exciting opportunity to record and track game scores, enabling players to delve into comprehensive statistics 
                        and engage in friendly tournaments with friends. Discover who can keep up the best stats, analyze gameplay trends, and embark on an immersive journey 
                        through the world of Mexican Train like never before. Join us and elevate your gaming experience today! </p>
                    </div>
                <div className="image-container">
                    <img src={Game} alt="Game Image" />
                </div>    
            </div>

        );
    
};

export default HomePage;


