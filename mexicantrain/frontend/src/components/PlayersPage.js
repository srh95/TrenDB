import React, { Component } from "react";
import { render } from "react-dom";
import "../static/css/index.css";


export default class PlayersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  fetchData() {
    fetch("http://127.0.0.1:8000/api/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }

  componentDidMount() {
    this.fetchData();

  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>

          {this.state.data.map(Players => {
            return (
              <tr key={Players.id}>
                <td> {Players.first_name}</td>
                <td> {Players.last_name}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }

}