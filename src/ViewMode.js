import React, { Component } from 'react';
import VehicleData from './data/vehicle.json';
import EditMode from './EditMode';
import CoverageChange from './CoverageChange';
import './App.css';



class ViewMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            compDeduc: VehicleData.compDeductible,
            collDeduc: VehicleData.collDeductible,
            rentalReimburst: VehicleData.rentalCar,
            roadAssis: VehicleData.roadside
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }


    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {
        return (
            <div className='ViewMode'>
                <div className="card">
                    <h3 className="card-header">{VehicleData.name}</h3>
                    <div className="card-block">
                        <div className="card-text">
                            <div className="row">
                                <div className="column-title" >
                                    <p>Comprehensive Deductable</p>
                                    <p>Collison Deductible</p>
                                    <p>Rental Reimburtment</p>
                                    <p>Roadside Assistance</p>
                                </div>
                                <div className="column-value">
                                    <p>${this.state.compDeduc}</p>
                                    <p>${this.state.collDeduc}</p>
                                    <p>{this.state.rentalReimburst === 'false' ? 'No' : 'Yes'}</p>
                                    <p>{this.state.roadAssis === 'false' ? 'No' : 'Yes'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className='editCoverage' onClick={this._onButtonClick}>EDIT COVERAGE</button>  </div>
                    </div>
                </div>
                {this.state.showComponent ?
                    <EditMode />  :
                    null
                }
                {this.state.showComponent ?
                   <CoverageChange /> :
                    null
                }
                
            </div>
        );
    }
}

export default ViewMode;