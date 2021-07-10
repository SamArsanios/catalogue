const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
const FETCH_API_FAILURE = 'FETCH_API_FAILURE';
const FETCH_API_REQUEST = 'FETCH_API_REQUEST';

const fetchApiRequest = () => ({
  type: FETCH_API_REQUEST,
});

const fetchApiSuccess = (comics) => ({
  type: FETCH_API_SUCCESS,
  payload: comics,
});

const fetchApiFailure = (error) => ({
  type: FETCH_API_FAILURE,
  payload: error,
});

export { FETCH_API_SUCCESS, FETCH_API_FAILURE, FETCH_API_REQUEST, fetchApiRequest, fetchApiSuccess, fetchApiFailure }