import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE,
    POST_SMURF_DATA_START,
    POST_SMURF_DATA_SUCCESS,
    POST_SMURF_DATA_FAILURE,
} from '../actions/index.js';


// initial state data 
const initialState = {
    smurfs: [],
    post: {},
    isLoadingSmurf: false,
    isLoadingPost: false,
    errorSmurf: '', 
    errorPost: '', 
};

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_SMURF_DATA_START:
            return {
                ...state,
                isLoadingSmurf: true,
                errorSmurf: ''
            };
        case FETCH_SMURF_DATA_SUCCESS:
            return {
                ...state,
                isLoadingSmurf: false,
                smurfs: action.payload,
                errorSmurf: ''
            };
        case FETCH_SMURF_DATA_FAILURE:
            return {
                ...state,
                isLoadingSmurf: false,
                errorSmurf: action.payload
            };
        case POST_SMURF_DATA_START:
            return {
                ...state, 
                isLoadingPost: true, 
                errorPost: ''
            }
        case POST_SMURF_DATA_SUCCESS:
            return {
                ...state, 
                isLoadingPost: false, 
                post: action.payload,
                errorPost: ''
            }
        case POST_SMURF_DATA_FAILURE:
            return {
                ...state, 
                isLoadingPost: false, 
                errorPost: action.payload
            }
        default:
            return state;
        }
};