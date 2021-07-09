import { Component } from 'react';
import './App.css';
import Intro from './componets/intro/index'

class App extends Component {
  state = {
    series:[]
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title"> Tv Series List</h1>
      </header>
     <Intro message = 'Here you can find all of the most loved series'/>
     the length of the series is - {this.state.series.length}
    </div>
  );
 }
}

export default App;
