import React, { Component } from "react";
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/home.css";
import Game from '../../../static/images/home_game.png';
import Domino1 from '../../../static/images/home_domino_1.png';
import Domino2 from '../../../static/images/home_domino_2.png';
import Domino3 from '../../../static/images/home_domino_3.png';
import ScrollDownIndicator from './ScrollDownIndicator';
import InfoRectangle from "./InfoRectangle";

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
                    <InfoRectangle
                        img={Domino1}
                        largeText="Track Progress"
                        smallText="With TrenDB, effortlessly monitor your gaming journey. Keep a thorough record of your wins, losses, and overall performance. Track the number of games played, your opponents, and more, all in one convenient location."
                    />
                    <InfoRectangle
                        img={Domino2}
                        largeText="Compare with Friends"
                        smallText="Challenge your friends and see who reigns supreme! TrenDB allows you to compare your performance with your friends', encouraging friendly competition. Track who's leading the leaderboard and strive to claim the title of ultimate Mexican Train champion!"
                    />
                    <InfoRectangle
                        img={Domino3}
                        largeText="Discover Insights"
                        smallText="Unlock valuable insights with TrenDB's analytics tools. Delve into detailed statistics and uncover hidden trends in your gameplay, from round scores to winning streaks. Gain a deeper understanding of your strengths and areas for improvement."
                    />
                </div>
            </div>

        </div>

        );
};

export default HomePage;


