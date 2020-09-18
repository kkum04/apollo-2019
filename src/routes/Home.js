import React from "react";
import {gql} from "apollo-boost"
import {useQuery} from "@apollo/react-hooks"
import Movie from "../component/Movie";

const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`

export default () => {
  const {loading, data} = useQuery(GET_MOVIES)

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading &&
        data.movies &&
        data.movies.map(m => <Movie key={m.id} id={m.id} />)
      }
    </>
  )
}

