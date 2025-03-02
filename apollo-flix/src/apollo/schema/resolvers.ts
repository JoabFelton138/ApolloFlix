interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  rating: number;
}

interface MovieArgs {
  id: string;
}

const movies: Movie[] = [
  { id: '1', title: 'Inception', releaseDate: '2010-07-16', rating: 8.8 },
  { id: '2', title: 'Interstellar', releaseDate: '2014-11-07', rating: 8.6 },
  { id: '3', title: 'Dunkirk', releaseDate: '2017-07-21', rating: 7.8 },
  { id: '4', title: 'Tenet', releaseDate: '2020-09-03', rating: 7.5 },
];

const resolvers = {
  Query: {
    movies: (): Movie[] => movies,
    movie: (_: unknown, { id }: MovieArgs): Movie | undefined =>
      movies.find((movie) => movie.id === id),
  },
};

export default resolvers;
