import React, { Component } from 'react';
import coverageData from './data/coverages.json';
import VehicleData from './data/vehicle.json';
import Layout from './Layout';

const highlightColor = "#17a2b8";

class EditMode extends Component {
    constructor(props) {
        super(props);
        const { vehicleData } = props;
        this.state = vehicleData
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

    getSelectedWithFontColor(value, name) {
        return this.isSelected(value, name) ? 'white' : 'black'
    }

    render() {
        return (
            <Layout title={VehicleData.name}>
                <div className="card-block">
                    <div className="card-text">
                    <div class="btn-group" style={{ display: 'block' }}>
                            <label> Comprehensive Deductible </label>
                            {coverageData.coverageOptions[0].options.map((dataItem, index) => {
                                return <button type="button" className="btn btn-light"
                                    key={index} onClick={() => this.handleClick(dataItem, 'compDeductible')}
                                    style={{ backgroundColor: this.getSelectedWithColor(dataItem.value, 'compDeductible'),
                                    color: this.getSelectedWithFontColor(dataItem.value, 'compDeductible')}}>
                                    {dataItem.name}
                                </button>
                            })}
                            <br />
                            <label> Collision Deductible </label>
                            {coverageData.coverageOptions[1].options.map((dataItem, index) => {
                                return <button type="button" className="btn btn-light"
                                    key={index}
                                    onClick={() => this.handleClick(dataItem, 'collDeductible')}
                                    style={{ backgroundColor: this.getSelectedWithColor(dataItem.value, 'collDeductible'),
                                    color: this.getSelectedWithFontColor(dataItem.value, 'collDeductible') }}>
                                    {dataItem.name}
                                </button>
                            })}
                            <br />
                            <label> Rental Imburstment</label>
                            {coverageData.coverageOptions[2].options.map((dataItem, index) => {
                                return <button type="button" className="rbtn btn-light" 
                                    key={index}
                                    onClick={() => this.handleClick(dataItem, 'rentalCar')}
                                    style={{ backgroundColor: this.getSelectedWithColor(dataItem.value, 'rentalCar'),
                                    color: this.getSelectedWithFontColor(dataItem.value, 'rentalCar') }}>
                                    {dataItem.name}
                                </button>
                            })}
                            <br />
                            <label> Roadside Assistant</label>
                            {coverageData.coverageOptions[3].options.map((dataItem, index) => {
                                return <button type="button" className="rbtn btn-light" 
                                    key={index}
                                    onClick={() => this.handleClick(dataItem, 'roadside')}
                                    style={{ backgroundColor: this.getSelectedWithColor(dataItem.value, 'roadside'),
                                    color: this.getSelectedWithFontColor(dataItem.value, 'roadside') }}>
                                    {dataItem.name}
                                </button>
                            })}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default EditMode;

