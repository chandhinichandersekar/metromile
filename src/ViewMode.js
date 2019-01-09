import React, { Component } from 'react';
import EditMode, { findOption } from './EditMode';
import CoverageChange from './CoverageChange';
import './App.css';
import Layout from './Layout';


class ViewMode extends Component {
    constructor(props) {
        super(props);
        const { vehicleData } = props;
        this.state = {
            showComponent: false,
            compDeductible: vehicleData.compDeductible,
            collDeduc: vehicleData.collDeductible,
            rentalReimburst: vehicleData.rentalCar,
            roadAssis: vehicleData.roadside,
            changes: {
                compDeductible: findOption(vehicleData.compDeductible, 'compDeductible'),
                collDeductible: findOption(vehicleData.collDeductible, 'collDeductible'),
                rentalCar: findOption(vehicleData.rentalCar, 'rentalCar'),
                roadside: findOption(vehicleData.roadside, 'roadside')
            }
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    handleChangesFromEditMode(changes) {
        this.setState({
            changes
        })
    }


    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {
        return (
            <React.Fragment>
                <Layout title={this.props.vehicleData.name}>
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
                                    <p>${this.state.compDeductible}</p>
                                    <p>${this.state.collDeduc}</p>
                                    <p>{this.state.rentalReimburst === 'false' ? 'No' : 'Yes'}</p>
                                    <p>{this.state.roadAssis === 'false' ? 'No' : 'Yes'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className='editCoverage' onClick={this._onButtonClick}>EDIT COVERAGE</button>  
                        </div>
                    </div>
                </Layout>
                {this.state.showComponent ?
                    <EditMode vehicleData={this.props.vehicleData} handleChangesFromEditMode={this.handleChangesFromEditMode.bind(this)}/> :
                    null
                }
                {this.state.showComponent ?
                    <CoverageChange changes={this.state.changes}/> :
                    null
                }
            </React.Fragment>

        );
    }
}

export default ViewMode;