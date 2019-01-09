import React, { Component } from 'react';
import './App.css';
import ViewMode from './ViewMode';
import vehicleData from './data/vehicle.json';
import coverageData from './data/coverages.json';

export function findOption(value, name) {
  const compDeductibleInfo = coverageData.coverageOptions.find(data => {
      return data.name === name;
  });
  return compDeductibleInfo.options.find(option => {
      return option.value === value;
  })
}

function getVehicleDataWithOptions() {
  return {
    name: vehicleData.name,
    compDeductible: findOption(vehicleData.compDeductible, 'compDeductible'),
    collDeductible: findOption(vehicleData.collDeductible, 'collDeductible'),
    rentalCar: findOption(vehicleData.rentalCar, 'rentalCar'),
    roadside: findOption(vehicleData.roadside, 'roadside')
  }
}
const vehicleDataFromLocalStorage = localStorage.getItem('vehicleData');

const localStorageOrJsonVehicleData = vehicleDataFromLocalStorage ? JSON.parse(vehicleDataFromLocalStorage) : getVehicleDataWithOptions();

console.log('localStorageOrJsonVehicleData', localStorageOrJsonVehicleData);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewMode vehicleData={localStorageOrJsonVehicleData} />
      </div>
    );
  }
}

export default App;
