import React, { Component } from "react";
import { render } from "react-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>This is the home page</h1>
                <button type="button">Create a Database!</button>
            </div>

        );
    }
}