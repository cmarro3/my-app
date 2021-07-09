import { Component } from 'react';
import './App.css';
import Intro from './componets/intro/index'
import 'whatwg-fetch';
import { fetch } from 'whatwg-fetch';
import Series from './containers/series/index'
import SeriesList from './componets/intro/series/index'
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
    <SeriesList list = {this.state.series}/>
     the length of the series of cat facts is - {this.state.series.length}
     <Series/>

    </div>
  );
 }
}

export default App;
