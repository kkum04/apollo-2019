import React from 'react';
import {gql} from 'apollo-boost';
import {useParams} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
      movie(id: $id) {
          id
          title
          medium_cover_image
          description_intro
      }
  }
`

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: {
      id: parseInt(id)
    }
  });

  return (
    <>
      <h1>{loading ? 'Loading...' : data.movie.title}</h1>
      {!loading && data && data.movie && (
        <>
          <h2>
            {data.movie.language} * {data.movie.rating}
          </h2>

          <p>{data.movie.description}</p>
        </>
      )}

      {!loading && data && data.movie && (
        <img src={data.movie.medium_cover_image} alt={'이미지'} />
      )}
    </>
  );
};