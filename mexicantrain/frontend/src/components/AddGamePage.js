import React, { Component } from "react";
import { render } from "react-dom";

export default class AddGamePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>This is the add game page</h1>
                <button type="button">Click Me!</button>
            </div>

        );
    }
}