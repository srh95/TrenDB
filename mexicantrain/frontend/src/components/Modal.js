import React from "react";

function Modal(){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button> X </button>
                <div className="title">
                    <h1> Add a player</h1>
                </div>
                <div className="body" >
                    <p> Enter player's first and last name</p>
                    {/* <input type="text" id="fname" name="fname">First Name</input>
                    <input type="text" id="lname" name="lname">Last Name</input> */}
                </div>
                <div className="footer">
                    <button>Cancel</button>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}
export default Modal;