import React, { Component } from "react";
import { render } from "react-dom";
import Modal from "./Modal";
import "/Users/sophiahall/Documents/TrenDB/mexicantrain/frontend/static/css/index.css";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import {Link} from "react-router-dom";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class PlayersPage extends Component {
  // const [openModal, setOpenModal] = useState(false);

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // openModal: false,
      first_name: [],
      last_name: [],
    };

    this.handleAddPlayerButton = this.handleAddPlayerButton.bind(this);
    // this.handleModal = this.handleModal.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);

    
  }

  // handleModal() {
  //   console.log(this.state),
  //   this.setState({
  //     openModal: true,
  //   });
  //   console.log(this.state);
  // }

  handleFirstNameChange(e){
    this.setState({
      first_name: e.target.value,
    });
  }

  handleLastNameChange(e){
    this.setState({
      last_name: e.target.value,
    });
  }

  handleAddPlayerButton(){
      console.log(this.state);
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
      <div className="center-container">
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
        {/* <button 
          className="Add" 
          onClick= {this.setState({
            openModal: true,
          })}
        >
          Add New Player
        </button>
        {this.openModal && <p>Hi</p>} */}


      </div>
    );
  }

}