// url = https://gateway.marvel.com/v1/public/comics?ts=1&apikey=e5567719e7a9a7711ba2f297c92dcdbc&hash=2329c78c574a4a57c85382a88fe60f63

// public_key = e5567719e7a9a7711ba2f297c92dcdbc

// const private_key = 23eae1e804820541ec64af34bce0b41baa0f1e18

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

const api_key = 'e5567719e7a9a7711ba2f297c92dcdbc';
const hash = '2329c78c574a4a57c85382a88fe60f63';

const url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${api_key}&hash=${hash}`;

const fetchComics = async () => {
  const response = await fetch(url);
  const comics = await response.json();

  console.log(comics);
};

console.log(fetchComics());
