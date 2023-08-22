import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage.js";
import AddGamePage from "./AddGamePage.js";
import PlayersPage from "./PlayersPage.js";
import LoginPage from "./LoginPage.js";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import Navbar from './Navbar';
import ReactDOM from 'react-dom'
// import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/index.css";


const App = () => {
    return (
        <div className="App">
            <Router>
                 <Navbar />
                    <Routes>
                        <Route exact path='/' element={< HomePage />}></Route>
                        <Route exact path='/games/addGame' element={< AddGamePage />}></Route>
                        <Route exact path='/players' element={< PlayersPage />}></Route>
                        <Route exact path='/login' element={< LoginPage />}></Route>
                    </Routes>
            </Router>
            <div> HI</div>
        </div>
    
    );
}
ReactDOM.render(<App />, document.getElementById('app'));

// const appDiv = document.getElementById("app");
// render(<App />, appDiv);

// import React from 'react'
// import ReactDOM from 'react-dom'

// const App = () => {
//     return (
//         <p>Hello World!</p>
//     );
// }

// ReactDOM.render(<App />, document.getElementById('app'));