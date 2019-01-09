import React, { Component } from 'react';
import EditMode from './EditMode';
import CoverageChange from './CoverageChange';
import './App.css';
import Layout from './Layout';


class ViewMode extends Component {
    constructor(props) {
        super(props);
        const { vehicleData } = props;
        this.state = {
            showComponent: false,
            ...vehicleData,
            changes: vehicleData
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

    handleSave() {
        this.setState({
            ...this.state.changes
        })
        localStorage.setItem('vehicleData', JSON.stringify(
            {
                name: this.props.vehicleData.name,
                ...this.state.changes
            }
        ));
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
                                    <p>Collison Deductib}le</p>
                                    <p>Rental Reimburtment</p>
                                    <p>Roadside Assistance</p>
                                </div>
                                <div className="column-value">
                                    <p>{this.state.compDeductible.name}</p>
                                    <p>{this.state.collDeductible.name}</p>
                                    <p>{this.state.rentalCar.name}</p>
                                    <p>{this.state.roadside.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className='editCoverage' onClick={this._onButtonClick}>EDIT COVERAGE</button>
                        </div>
                    </div>
                </Layout>
                {this.state.showComponent ?
                    <EditMode vehicleData={this.props.vehicleData} handleChangesFromEditMode={this.handleChangesFromEditMode.bind(this)} /> :
                    null
                }
                {this.state.showComponent ?
                    <CoverageChange changes={this.state.changes} handleSave={this.handleSave.bind(this)} /> :
                    null
                }
            </React.Fragment>

        );
    }
}

export default ViewMode;