import React, { Component } from 'react';
import Layout from './Layout';

class CoverageChange extends Component {
    render() {
        return (
            <Layout title="Coverage Changes">
                <div className="card-block">
                    <div className="card-text">
                            <label> Comprehensive Deductible {this.props.changes.compDeductible.name}</label>
                            <label> Collision Deductible {this.props.changes.collDeductible.name}</label> 
                            <label> Rental Imburstment  {this.props.changes.rentalCar.name}</label> 
                            <label> Roadside Assistant {this.props.changes.roadside.name}</label> 
                    </div>
                </div>
                </Layout>
        );
    }
}

export default CoverageChange;

