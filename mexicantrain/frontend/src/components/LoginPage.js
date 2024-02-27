import React, { Component } from "react";
import { render } from "react-dom";

const LoginPage = ({ onLogin }) => {
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={onLogin}>Login</button>
        </div>
    );
}

export default LoginPage;