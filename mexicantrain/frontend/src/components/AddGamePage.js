import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/gameEntry.css";

const AddGamePage = () => {

    const [players, setPlayers] = useState([]);
    const [rowCount, setRowCount] = useState(1); // for number of rows
    const [selectedPlayerIds, setSelectedPlayerIds] = useState([]); // for selected players
    const [scores, setScores] = useState(Array.from({ length: 8 }, () => Array.from({ length: 13 }, () => 0)));

    const addRow = () => {
        if (rowCount < 8) {
            setRowCount(rowCount + 1);
        }
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    const fetchPlayers = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/players');
            setPlayers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handlePlayerSelection = (rowIndex, playerId) => {
        const updatedSelectedPlayerIds = [...selectedPlayerIds];
        updatedSelectedPlayerIds[rowIndex] = playerId;
        setSelectedPlayerIds(updatedSelectedPlayerIds);
    };

    const handleScoreChange = (rowIndex, colIndex, value) => {
        const updatedScores = [...scores];
        updatedScores[rowIndex][colIndex] = parseFloat(value) || 0; // Convert value to a number
        setScores(updatedScores);
    };

    const calculateRowTotal = (rowIndex) => {
        const rowScores = scores[rowIndex];
        const rowTotal = rowScores.reduce((total, score) => total + score, 0);
        return rowTotal;
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        {[...Array(13).keys()].map(i => (
                            <th key={i}>{12 - i}</th>
                        ))}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(rowCount).keys()].map(rowIndex => (
                        <tr key={rowIndex}>
                            <td>
                            <select onChange={(e) => handlePlayerSelection(rowIndex, e.target.value)}>
                                    <option value="">Select a player</option>
                                    {players.map((p) => (
                                        <option key={p.id} value={p.id}>
                                            {`${p.first_name} ${p.last_name}`}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            {[...Array(13).keys()].map(colIndex => (
                                <td key={colIndex}>
                                <input
                                    type="number"
                                    className="small-input"
                                    value={scores[rowIndex][colIndex]}
                                    onChange={(e) => handleScoreChange(rowIndex, colIndex, e.target.value)}
                                    inputmode="numeric"
                                    min={0}
                                />
                            </td>
                            ))}
                            <td>{calculateRowTotal(rowIndex)}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="15">
                            {rowCount < 8 && (
                                <button onClick={addRow}>
                                    Add Row
                                </button>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AddGamePage;