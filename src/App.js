import React, { Component } from 'react';
import Display from './display.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      value:'',
      result:null
    };
    this.change_input = this.change_input.bind(this);
    this.lol = this.lol.bind(this);
  }
  change_input(event){
    this.setState({value: event.target.value})
  }
  lol(){
    let input = this.state.value;
    const basic_url = 'https://www.googleapis.com/books/v1/volumes?q=';
    let url = `${basic_url}${input}`;
    fetch(url, {method:'GET'})
    .then(response => response.json())
    .then(res => {
      const result = res.items;
      this.setState({result});

    });

  }
  render() {
    return (
      <div className="App">
        <input className = "Search" placeholder="Search" value = {this.state.value} onChange = {this.change_input}/>
        <button onClick ={this.lol} >Submit</button>  
        <Display book = {this.state.result}/>;      
      </div>
    );
  }
}

export default App;
