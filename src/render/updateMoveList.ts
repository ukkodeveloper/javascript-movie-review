import moveList from '../components/MovieList';
import { FetchStandard } from '../app';
import { Movie } from '../domain/processMovieData';

export default (movieData: Movie, fetchStandard: FetchStandard) => {
  const isLastPage = movieData.totalPages === fetchStandard.page;
  moveList.updateMovieList(movieData.movies, isLastPage);
};
