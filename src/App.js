import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Propriedade do state' , age: 28},
      { name: 'max1' , age: 28},
      { name: 'max2' , age: 28}
    ]

  }
  switchNameHandler = (newName) =>{
    this.setState({persons: [
      { name: newName , age: 28},
      { name: 'sabrininha' , age: 28},
      { name: 'henrique' , age: 28}
    ]})
  }
  nameChangedHandler = (event) =>{
    this.setState({persons: [
      { name: 'blabla' , age: 28},
      { name: event.target.value , age: 28},
      { name: 'henrique' , age: 28}
    ]})

  }
  render() {
    return (
      // todos htmls tem que estar dentro de uma div principal
      <div className="App">

      
       <h1 className="App-header"> This is the main App component </h1>
       <Person 
       click={this.switchNameHandler.bind(this,'Arturzao')}
       changed={this.nameChangedHandler}
       name={this.state.persons[0].name}
       />
       <Person 
       onClick={this.switchNameHandler.bind('henrique')}
       name={this.state.persons[1].name}
       />
       <Person name={this.state.persons[2].name}/>
       <button onClick={this.switchNameHandler.bind(this,'Leo')}>Button</button>
      </div>
    );
  }
}

export default App;
