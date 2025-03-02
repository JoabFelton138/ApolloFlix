import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../apollo/queries/queries.ts';

interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  rating: number;
}

const MoviesList = () => {
  const { data } = useQuery<{ movies: Movie[] }>(GET_MOVIES);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data?.movies?.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MoviesList;
