// react imports 
import React from 'react';
import { connect } from 'react-redux';
import { PulseSpinner } from 'react-spinners-kit';

// actions  
import { getSmurfData } from '../actions/index.js';

// components 
import Smurf from './Smurf.js';

const SmurfList = props => {
  return (
    <div className="smurflist-container">
      <div className="data-btn" onClick={props.getSmurfData}>
        {props.isLoadingSmurf ? (
          <PulseSpinner size={30}
          color="#686769"
          loading={props.isLoading}
          />
        ) : (
          <button className="data-btn">Get Smurf Data</button>
        )}
      </div>

      <div className="smurfs-container">
        {props.smurfs && 
          props.smurfs.map(smurf => <Smurf key={smurf.id} props={smurf} />)}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoadingSmurf: state.isLoadingSmurf,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfData }
)(SmurfList);