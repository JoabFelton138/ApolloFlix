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
  const { loading, error, data } = useQuery<{ movies: Movie[] }>(GET_MOVIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full table-auto'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='px-4 py-2'>Title</th>
            <th className='px-4 py-2'>Release Date</th>
            <th className='px-4 py-2'>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data?.movies?.map((movie) => (
            <tr key={movie.id} className='border-b'>
              <td className='px-4 py-2'>{movie.title}</td>
              <td className='px-4 py-2'>{movie.releaseDate}</td>
              <td className='px-4 py-2'>{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;
