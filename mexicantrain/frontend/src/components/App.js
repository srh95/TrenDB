import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import HomePage from "./HomePage.js";
import AddGamePage from "./AddGamePage.js";
import PlayersPage from "./PlayersPage.js";
import LoginPage from "./LoginPage.js";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import Navbar from './Navbar';


const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={< HomePage />}></Route>
                    <Route exact path='/games/addGame' element={< AddGamePage />}></Route>
                    <Route exact path='/players' element={< PlayersPage />}></Route>
                    <Route exact path='/login' element={< LoginPage />}></Route>
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
