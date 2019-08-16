import axios from 'axios';

// fetch for smurf array 
export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START'; 
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

export const getSmurfData = () => dispatch => {

    // loading data 
    dispatch({ type: FETCH_SMURF_DATA_START });

    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            // successful 
            console.log("response data", response.data)
            
            dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: response.data });
        })
        .catch(error => {
            // unsuccessful 
            dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: error.response });
        });
};

