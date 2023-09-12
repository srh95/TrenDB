import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/gameEntry.css";


const AddGamePage = () => {

    const [players, setPlayers] = useState([]); // state to store players
    const [selectedPlayers, setSelectedPlayers] = useState([]); // state to store players which have been selected
    const [rowCount, setRowCount] = useState(1); // state to store number of rows in the table
    const [scores, setScores] = useState([]); // State to store scores


    useEffect(() => {
        fetchPlayers();
    }, []);

    useEffect(() => {
        // Reset selections for all rows except the last one
        const newSelectedPlayers = selectedPlayers.slice(0, rowCount);
        setSelectedPlayers(newSelectedPlayers);
    }, [rowCount]);

    const fetchPlayers = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/players');
            console.log('API Response:', response);
            setPlayers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handlePlayerSelection = (rowIndex, playerId) => {
        const updatedSelectedPlayers = [...selectedPlayers];
        updatedSelectedPlayers[rowIndex] = playerId;
        console.log('Selected Players:', updatedSelectedPlayers); // Debugging output
        setSelectedPlayers(updatedSelectedPlayers);
    };

    const addRow = () => {
        if (rowCount < 8) {
            setRowCount(rowCount + 1);
        }
    };

    // Filter available players based on selections
    const availablePlayers = players.filter((p) => !selectedPlayers.includes(p.id));
    console.log('Available Players:', availablePlayers); // Debugging output

     // Function to handle score changes in a specific cell
     const handleScoreChange = (rowIndex, colIndex, value) => {
        const updatedScores = [...scores];
        updatedScores[rowIndex][colIndex] = parseFloat(value) || 0; // Convert value to a number
        setScores(updatedScores);
    };

    // Function to calculate the total for a specific row
    const calculateRowTotal = (rowIndex) => {
        const rowScores = scores[rowIndex];
        const rowTotal = rowScores.reduce((total, score) => total + score, 0);
        return rowTotal;
    };


    return (
        <>
            <div className="center-container">
                <table>
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>12</th>
                            <th>11</th>
                            <th>10</th>
                            <th>9</th>
                            <th>8</th>
                            <th>7</th>
                            <th>6</th>
                            <th>5</th>
                            <th>4</th>
                            <th>3</th>
                            <th>2</th>
                            <th>1</th>
                            <th>0</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: rowCount }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>
                                    <select
                                        onChange={(e) => handlePlayerSelection(rowIndex, e.target.value)}
                                        value={selectedPlayers[rowIndex] || ''}
                                    >
                                        <option value="">Select a player</option>
                                        {players.map((p) => (
                                            <option key={p.id} value={p.id}>
                                                {`${p.first_name} ${p.last_name}`}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                {/* Add number input boxes for scores */}
                                {scores[rowIndex].map((score, colIndex) => (
                                    <td key={colIndex}>
                                        <input
                                            type="number"
                                            className="small-input"
                                            value={score}
                                            onChange={(e) => handleScoreChange(rowIndex, colIndex, e.target.value)}
                                            onBlur={() => { /* You can add any additional logic here */ }}
                                        />
                                    </td>
                                ))}
                                
                                {/* Add more columns for scores here */}
                                <td>{calculateRowTotal(rowIndex)}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                {rowCount < 8 && (
                                    <button onClick={addRow}>
                                        Add Row
                                    </button>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button>
                    Save Game
                </button>
            </div>
        </>
    );
}

export default AddGamePage;