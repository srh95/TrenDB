import React, { useState, useEffect } from "react";
import axios from 'axios';
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/index.css";


const GamesPage = () => {

    return (
        <>
          <div className="center-container">
            <table>
              <tr>
                <th>Date</th>
                <th>Players</th>
                <th></th>
              </tr>
    
                  <tr>
                    <td> Date</td>
                    <td> Players</td>
                    <td> Game Details</td>
                  </tr>
            </table>
            <button>
              Add New Game
            </button>
            </div>
          </>
        );
    }
    
    export default GamesPage;
    