import React, { useState, useEffect } from "react";
import axios from 'axios';
import Modal from "./Modal";
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/index.css";


const PlayersPage = () => {

  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    return (
    <>
      <div className="center-container">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>

          {data.map((Players) => {
            return (
              <tr key={Players.id}>
                <td> {Players.first_name}</td>
                <td> {Players.last_name}</td>
              </tr>
            )
          })}
        </table>
        
        <button 
          className="Add" 
          onClick={() => {
            setOpenModal(true)
          }}
        >
          Add New Player
        </button>
        {openModal && <Modal closeModal={setOpenModal}/>}
        {/* {openModal && <Modal onClose={setOpenModal(false)} />} */}
        </div>
      </>
    );

}

export default PlayersPage;