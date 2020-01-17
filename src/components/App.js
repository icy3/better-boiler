import React, { Component } from "react";
import moment from 'moment';
import axios from 'axios';
import API_KEY from '../config.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      images: {}
    };
  }

  componentDidMount(){
    axios.get(`findsomethingat bottomofapod?api_key=${API_KEY}`)
    .then((data) => {
      console.log(data);
      this.setState({images: data.data}) // first part is an obj, hence {}
    })
  }
  render() {
    return (
      <div>
        <h3>Today's date is hi, todays date is {moment().format("MMM Do YY")}</h3>
        <h4>Today's picture is: {this.state.images.title}</h4>
        <p>{this.state.images.explanation}</p>
        <img src="https://apod..."></img> {/* cOPY AND PASTE from the url*/}
        <img styles ={{width:'50%', height:'50%'}} src ={this.state.images.hdurl}"httpes:apid"></img>
      </div>
    );
  }
}
