import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import MoviesHandler from '../MoviesHandler/MoviesHandler';
import React from 'react';

function Movies() {
  const [showShortFilmsOnly, setShowShortFilmsOnly] = React.useState(false);
  const onFilmsFilter = (isFiltered) => setShowShortFilmsOnly(isFiltered);
  const movies = MoviesHandler();
  return (
    <main className="movies">
      <Preloader />
      <SearchForm onSearch={movies.search} filterShortFilms={onFilmsFilter} />
      <MoviesCardList>
        {movies.moviesList && showShortFilmsOnly
          ? movies.shortMoviesList.map((movie) => {
              return (
                <MoviesCard
                  key={movie.id}
                  title={movie.nameRU}
                  length={movie.duration}
                  imageSrc={`https://api.nomoreparties.co${movie.image.url}`}
                  imageAlt={movie.nameRu}
                  imageWidth={movie.image.width}
                  trailerLink={movie.trailerLink}
                />
              );
            })
          : movies.moviesList.map((movie) => {
              return (
                <MoviesCard
                  key={movie.id}
                  title={movie.nameRU}
                  length={movie.duration}
                  imageSrc={`https://api.nomoreparties.co${movie.image.url}`}
                  imageWidth={movie.image.width}
                  trailerLink={movie.trailerLink}
                />
              );
            })}
      </MoviesCardList>
    </main>
  );
}

// country: "США"
// created_at: "2020-11-23T14:12:21.376Z"
// description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы."
// director: "Стивен Кайак "
// duration: 61
// id: 1
// image: {id: 1, name: "stones-in-exile", alternativeText: "", caption: "", width: 512, …}
// nameEN: "Stones in Exile"
// nameRU: "«Роллинг Стоунз» в изгнании"
// trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw"
// updated_at: "2020-11-23T14:12:21.376Z"
// year: "2010"

export default Movies;
