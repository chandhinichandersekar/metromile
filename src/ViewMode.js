import React, { Component } from 'react';
import EditMode from './EditMode';
import CoverageChange from './CoverageChange';
import './App.css';
import InnerViewMode from './InnerViewMode';
import { pick } from 'lodash';

const pages = {
    view: 0,
    edit: 1
}

class ViewMode extends Component {
    constructor(props) {
        super(props);
        const { vehicleData } = props;
        this.state = {
            showComponent: false,
            ...vehicleData,
            changes: vehicleData,
            currentPage: pages.view
        };
    }

    handleChangesFromEditMode(changes) {
        this.setState({
            changes
        })
    }


    editCoverageClick() {
        this.setState({
            currentPage: pages.edit,
        });
    }

    handleSave() {
        this.setState({
            ...this.state.changes,
            currentPage: pages.view
        })
        localStorage.setItem('vehicleData', JSON.stringify(
            {
                name: this.props.vehicleData.name,
                ...this.state.changes
            }
        ));
    }

    handleCancel() {
        this.setState({
            changes: pick(this.state, 'name', 'compDeductible', 'collDeductible', 'rentalCar', 'roadside'),
            currentPage: pages.view
        });

    }

    render() {
        const innerViewModeProps = {
            ...this.state,
            editCoverageClick: this.editCoverageClick.bind(this)
        }
        if (this.state.currentPage === pages.view) {
            return <InnerViewMode {...innerViewModeProps} />;
        } else {
            return (
                <React.Fragment>
                    <EditMode vehicleData={this.state} handleChangesFromEditMode={this.handleChangesFromEditMode.bind(this)} />
                    <CoverageChange 
                        oldData={this.state} 
                        changes={this.state.changes} 
                        handleSave={this.handleSave.bind(this)} 
                        handleCancel={this.handleCancel.bind(this)}
                    />
                </React.Fragment>
            );
        }
    }
}

export default ViewMode;