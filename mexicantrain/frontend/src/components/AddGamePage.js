import React, { useState, useEffect } from "react";
import axios from 'axios';
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/index.css";


const AddGamePage = () => {

    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [rowCount, setRowCount] = useState(1);


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
                                        {availablePlayers.map((p) => (
                                            <option key={p.id} value={p.id}>
                                                {`${p.first_name} ${p.last_name}`}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td>{/* Render content for column 2 based on selected player */}</td>
                                <td>{/* Render content for column 3 based on selected player */}</td>
                                <td>{/* Render content for column 4 based on selected player */}</td>
                                <td>{/* Render content for column 5 based on selected player */}</td>
                                <td>{/* Render content for column 6 based on selected player */}</td>
                                <td>{/* Render content for column 7 based on selected player */}</td>
                                <td>{/* Render content for column 8 based on selected player */}</td>

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