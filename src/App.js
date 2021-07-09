import { Component } from 'react';
import './App.css';
import Intro from './componets/intro/index'
import 'whatwg-fetch';
import { fetch } from 'whatwg-fetch';

class App extends Component {
  state = {
    series:[]
  }

  componentDidMount(){
    fetch('https://catfact.ninja/fact')
    .then((response) => response.json())
    .then(json => this.setState({series:json}))
  }
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title"> Random Cat Facts</h1>
      </header>
     <Intro message = 'Here you can find facts about cats'/>
     the length of the series of cat facts is - {this.state.series.length}
    </div>
  );
 }
}

export default App;
