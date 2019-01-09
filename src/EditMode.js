import React, { Component } from 'react';
import coverageData from './data/coverages.json';
import VehicleData from './data/vehicle.json';
import { Button, ButtonGroup } from 'react-bootstrap';
import Layout from './Layout';

const highlightColor = "#17a2b8";

export function findOption(value, name) {
    const compDeductibleInfo = coverageData.coverageOptions.find(data => {
        return data.name === name;
    });
    return compDeductibleInfo.options.find(option => {
        return option.value === value;
    })
}

class EditMode extends Component {
    constructor(props) {
        super(props);
        const { vehicleData }  = props;
        this.state = {
            compDeductible: findOption(vehicleData.compDeductible, 'compDeductible'),
            collDeductible: findOption(vehicleData.collDeductible, 'collDeductible'),
            rentalCar: findOption(vehicleData.rentalCar, 'rentalCar'),
            roadside: findOption(vehicleData.roadside, 'roadside')
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(option, name) {
        const newOption = {
            [name]: option
        }
        const newState = {
            ...this.state,
            ...newOption
        }
        this.setState(newOption);
        console.log('newState', newState);
        this.props.handleChangesFromEditMode(newState)
    }

    isSelected(value, name) {
        if (value === this.state[name].value) {
            return true;
        } else {
            return false;
        }
    }

    getSelectedWithColor(value, name) {
        return this.isSelected(value, name) ? highlightColor : 'white'
    }

    render() {
        return (
            <Layout title={VehicleData.name}>
                <div className="card-block">
                    <div className="card-text">
                        <ButtonGroup style={{ display: 'block' }}>
                            <label> Comprehensive Deductible </label>
                            {coverageData.coverageOptions[0].options.map((dataItem, index) => {
                                return (<Button key={index} onClick={() => this.handleClick(dataItem, 'compDeductible')} 
                                style={{ backgroundColor: this.getSelectedWithColor(dataItem.value, 'compDeductible')}}>
                                    {dataItem.name}
                                </Button>
                                );
                            })}
                            <br />
                            <label> Collision Deductible </label>
                            {coverageData.coverageOptions[1].options.map((dataItem, index) => {
                                return <Button
                                    key={index} 
                                    onClick={() => this.handleClick(dataItem, 'collDeductible')}
                                    style={{ backgroundColor: this.getSelectedWithColor(dataItem.value, 'collDeductible')}}>
                                    {dataItem.name}      
                                </Button>
                            })}
                            <br />
                            <label> Rental Imburstment</label> 
                            {coverageData.coverageOptions[2].options.map((dataItem, index) => {
                                return <Button key={index}
                                onClick={() => this.handleClick(dataItem, 'rentalCar')}
                                    style={{ backgroundColor: this.getSelectedWithColor(dataItem.value, 'rentalCar')}}>
                                    {dataItem.name}
                                </Button>
                            })}
                            <br />
                            <label> Roadside Assistant</label> 
                            {coverageData.coverageOptions[3].options.map((dataItem, index) => {
                                return <Button key={index}
                                onClick={() => this.handleClick(dataItem, 'roadside')}
                                    style={{ backgroundColor: this.getSelectedWithColor(dataItem.value, 'roadside')}}>
                                {dataItem.name}
                                </Button>
                            })}
                        </ButtonGroup>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default EditMode;

