import React, { useState, useEffect } from "react";
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/modal.css";
import axios from 'axios';


function Modal({ closeModal }) {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/', formData);
          console.log('API response:', response.data);
          // Handle success or show a success message
        } catch (error) {
          console.error('Error posting data:', error);
          // Handle error or show an error message
        }
        onclose();
      };

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1> Add a player</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="body" >
                        <label htmlFor="textInput">First Name: </label>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            // placeholder="First Name"
                        />
                    </div>
                    <div className="body" >
                        <label htmlFor="textInput">Last Name: </label>
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            // placeholder="Last Name"
                        />

                    </div>
                    <div className="footer">
                        <button onClick={() => closeModal(false)}>Cancel </button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div >
    );
}
export default Modal;