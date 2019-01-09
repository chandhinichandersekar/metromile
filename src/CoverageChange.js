import React, { Component } from 'react';
import Layout from './Layout';

function showChange(oldValue, newValue) {
 return `${oldValue} => ${newValue}`
}

class CoverageChange extends Component {

    makeValues(vehicleProperty) {
        return showChange(this.props.oldData[vehicleProperty].name,this.props.changes[vehicleProperty].name)
    }

    getLabel(vehicleProperty, title) {
        if (this.props.oldData[vehicleProperty].name === this.props.changes[vehicleProperty].name) {
            return null;
        } else {
            return <label> {title} {this.makeValues(vehicleProperty)}</label>
        }
    }

    render() {
        return (
            <Layout title="Coverage Changes">
                <div className="card-block">
                    <div className="card-text">
                            {this.getLabel('compDeductible', 'Comprehensive Deductible')}
                            {this.getLabel('collDeductible', 'Collision Deductible')}
                            {this.getLabel('rentalCar', 'Rental Imburstment')}
                            {this.getLabel('roadside', 'Roadside Assistant')}
                    </div>
                </div>
                <div className="card-footer">
                            <button type="button" className="btn btn-info" onClick={this.props.handleSave}>SAVE CHANGES</button>  
                            <div>
                            <button type="button" className="editCoverage" onClick={this.props.handleCancel}>CANCEL CHANGES</button> 
                            </div>
                        </div>
                </Layout>
        );
    }
}

export default CoverageChange;

