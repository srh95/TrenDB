import React, { Component } from "react";
import { render } from "react-dom";

export default class UserHomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>This is the user home page</h1>
                <button type="button">Create  Database!</button>
            </div>

        );
    }
}
