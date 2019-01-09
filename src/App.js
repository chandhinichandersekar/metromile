import React, { Component } from 'react';
import './App.css';
import ViewMode from './ViewMode';
import VehicleData from './data/vehicle.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewMode vehicleData={VehicleData}/> 
      </div>
    );
  }
}

export default App;
