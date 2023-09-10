import React, { useState, useEffect } from "react";
import axios from 'axios';
import Modal from "./Modal";
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/index.css";


const PlayersPage = () => {

  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const refreshData = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleModalClose = (success) => {
    setOpenModal(false);
    if (success) {
        setRefresh(!refresh); // Toggle refresh to trigger page refresh
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
        {/* {openModal && <Modal onClose={() => setOpenModal(false)} />} */}
        {/* {openModal && <Modal onClose={handleModalClose} />} */}
        {openModal && <Modal onClose={handleModalClose} onRefresh={refreshData} />}
        {/* {openModal && <Modal onClose={setOpenModal(false)} />} */}
        </div>
      </>
    );

}

export default PlayersPage;

// Issues to fix later: 
//  Table hits nav bar when too many players added 
// add player button positioning 
// error messages for not inputting anything 
// Delete player? maybe
