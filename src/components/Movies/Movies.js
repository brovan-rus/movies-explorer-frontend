import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function Movies() {
  return (
    <main className="movies">
      <Preloader />
      <SearchForm />
      <MoviesCardList></MoviesCardList>
    </main>
  );
}

export default Movies;
