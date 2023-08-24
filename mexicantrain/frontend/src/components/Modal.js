import React from "react";
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/modal.css";

function Modal({closeModal}) {

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1> Add a player</h1>
                </div>
                <div className="body" >
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                />
                    
                
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Cancel </button>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}
export default Modal;