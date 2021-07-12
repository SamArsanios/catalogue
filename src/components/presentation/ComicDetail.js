import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import fetchComics from '../../actions';

export const handleErrors = (response) => {
  if (!response.ok) {
    throw new Error();
  }
  return response;
};

const ComicDetail = () => {
  // const history = useHistory;
  const [comic] = useState;

  useEffect(() => {
    const apiKey = 'e5567719e7a9a7711ba2f297c92dcdbc';
    const hash = '2329c78c574a4a57c85382a88fe60f63';

    const url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apiKey}&hash=${hash}`;

    fetchComics(url);
    //   fetch(url)
    //     .then(handleErrors)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setComic(data);
    //     })
    //     .catch(() => history.push('/error'));
  }, []);

  return (
    <div>
      <h1>{comic.title}</h1>
      <div className>
        <img src={comic.thumbnail} width="100px" height="150px" alt={comic.title} />
      </div>
    </div>
  );
};

export default ComicDetail;
