import React, { Component, useState, useEffect } from "react";

import { render } from "react-dom";
import HomePage from "./HomePage.js";
import AddGamePage from "./AddGamePage.js";
import PlayersPage from "./PlayersPage.js";
import LoginPage from "./LoginPage.js";
import GamesPage from "./GamesPage.js";
import StatsPage from "./StatsPage.js";
import UserHomePage from "./UserHomePage.js"
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import LoggedInNavbar from './Navbar/LoggedInNavbar.js';
import LoggedOutNavbar from './Navbar/LoggedOutNavbar.js';


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login
    const handleLogin = () => {
        setIsLoggedIn(true); 
    };

    // Function to handle logout
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Router>
                {isLoggedIn ? <LoggedInNavbar /> : <LoggedOutNavbar />}
                <Routes>
                    <Route exact path='/' element={< HomePage />}></Route>
                    <Route exact path='/userhome' element={< UserHomePage />}></Route>
                    <Route exact path='/games/addGame' element={< AddGamePage />}></Route>
                    <Route exact path='/players' element={< PlayersPage />}></Route>
                    <Route exact path='/games' element={< GamesPage />}></Route>
                    <Route exact path='/stats' element={< StatsPage />}></Route>
                    <Route exact path='/login' element={<LoginPage onLogin={handleLogin} />}></Route>
                </Routes>
            </Router>
        </div>
    );
}
const appDiv = document.getElementById("app");
render(<App />, appDiv);
// export default App;

// export default class App extends Component {
//         constructor(props) {
//             super(props);
//         }

//         render() {
//             return(
//             <div>
//                 <h1> hi</h1>
//             </div>
//             );
//         }
//     }
// const appDiv = document.getElementById("app");
// render(<App />, appDiv);


// class App extends React.Component {
//    render(){
//       return (
//         <p>Hello world!</p>
//       );
//    }
// }

// ReactDOM.render(<App />, document.getElementById('app'));

// const App = () => {

//     return (
//         <div>
//             <p> Hello world </p>
//         </div>

//     );

// }

// export default App;
