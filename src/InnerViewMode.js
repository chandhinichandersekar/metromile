import React from 'react';
import Layout from './Layout';

function InnerViewMode({ name, compDeductible, collDeductible, rentalCar, roadside, editCoverageClick }) {
    return (
        <Layout title={name}>
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
                        <p>{compDeductible.name}</p>
                        <p>{collDeductible.name}</p>
                        <p>{rentalCar.name}</p>
                        <p>{roadside.name}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className='editCoverage' onClick={editCoverageClick}>EDIT COVERAGE</button>
            </div>
        </div>
    </Layout>
        );
}

export default InnerViewMode;



