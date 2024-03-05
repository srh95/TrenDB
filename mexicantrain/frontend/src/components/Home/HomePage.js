import React, { Component } from "react";
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/home.css";
import Game from '../../../static/images/home_game.png';
import Domino1 from '../../../static/images/home_domino_1.png';
import Domino2 from '../../../static/images/home_domino_2.png';
import Domino3 from '../../../static/images/home_domino_3.png';
import ScrollDownIndicator from './ScrollDownIndicator';

const HomePage = () => {

        return (
        <div>
            <div className="container">
                <div className="top-section">

                    <div className="large-text"> Welcome to TrenDB! </div>
         

                    <div className="small-container">
                        <p className="small-paragraph"> TrenDB provides Mexican Train game enthusiasts with a valuable tool for tracking their gameplay statistics 
                            and comparing their performance with others!</p>
                    </div>
             
                    <div className="image-container">
                        <img src={Game} alt="Game Image" />
                    </div>   
                </div>

                <ScrollDownIndicator />
            </div>

            <div className="bottom-section">
                <div className="inner-container">
                    <div className="header-text"> Why join TrenDB? </div>
                    <div className="rectangle"></div>
                    <div className="rectangle"></div>
                    <div className="rectangle"></div>
                </div>
            </div>

        </div>

        );
};

export default HomePage;


