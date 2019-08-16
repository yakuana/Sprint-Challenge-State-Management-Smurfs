import axios from 'axios';

// fetch for smurf array 
export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START'; 
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

// post smurf 
export const POST_SMURF_DATA_START = 'POST_SMURF_DATA_START'; 
export const POST_SMURF_DATA_SUCCESS = 'POST_SMURF_DATA_SUCCESS'; 
export const POST_SMURF_DATA_FAILURE = 'POST_SMURF_DATA_FAILURE'; 



export const getSmurfData = () => dispatch => {

    // loading data 
    dispatch({ type: FETCH_SMURF_DATA_START });

    axios
        .get('https://api.jikan.moe/v3/anime/1/episodes')
        .then(response => {
            // successful 
            console.log("response data", response.data)
            
            // dispatch({ type: FETCH_ANIME_SMURF_SUCCESS, payload: response.data.smurfs });
        })
        .catch(error => {
            // unsuccessful 
            dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: error.response });
        });
};

export const postSmurfData = () => (value, dispatch) => {

    // loading data 
    dispatch({ type: POST_SMURF_DATA_START });

    axios
        .post('http://localhost:5000/api/register', value)
        .then(response => {
            // successful 
            console.log("response data", response)
            
            // dispatch({ type: FETCH_ANIME_DATA_SUCCESS, payload: response.data.post });
        })
        .catch(error => {
            // unsuccessful 
            dispatch({ type: POST_SMURF_DATA_FAILURE, payload: error.response });
        });

}