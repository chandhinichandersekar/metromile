import React, { Component } from 'react';
import CoverageData from './data/coverages.json';
import VehicleData from './data/vehicle.json';
import { Button, ButtonGroup } from 'react-bootstrap';



class EditMode extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({

        });
    }
    render() {
        return (
            <div className="card">
                <h3 className="card-header">{VehicleData.name}</h3>
                <div className="card-block">
                    <div className="card-text">
                        <ButtonGroup style={{ display: 'block' }}>
                            <label> Comprehensive Deductible </label>{CoverageData.coverageOptions[0].options.map((dataItem, index) => {
                                return <Button key={index} onClick={this.handleClick}>{dataItem.name}</Button>
                            })} <br />
                            <label> Collision Deductible </label> {CoverageData.coverageOptions[1].options.map((dataItem, index) => {
                                return <Button key={index}>{dataItem.name}</Button>
                            })} <br />
                            <label> Rental Imburstment</label> {CoverageData.coverageOptions[2].options.map((dataItem, index) => {
                                return <Button key={index}>{dataItem.name}</Button>
                            })} <br />
                            <label> Roadside Assistant</label> {CoverageData.coverageOptions[3].options.map((dataItem, index) => {
                                return <Button key={index}>{dataItem.name}</Button>
                            })}
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditMode;

