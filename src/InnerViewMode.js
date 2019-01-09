import React from 'react';
import Layout from './Layout';

function InnerViewMode({ name, compDeductible, collDeductible, rentalCar, roadside, editCoverageClick }) {
    return (
        <Layout title={name}>
        <div className="card-block">
            <div className="card-text">
                        <label>Comprehensive Deductable <span className='changes'>{compDeductible.name}</span></label>
                        <label>Collison Deductible <span className='changes'>{collDeductible.name}</span></label>
                        <label>Rental Reimburtment <span className='changes'>{rentalCar.name}</span></label>
                        <label>Roadside Assistance <span className='changes'>{roadside.name}</span></label>
            </div>
            <div className="card-footer">
                <button className='editCoverage' onClick={editCoverageClick}>EDIT COVERAGE</button>
            </div>
        </div>
    </Layout>
        );
}

export default InnerViewMode;



