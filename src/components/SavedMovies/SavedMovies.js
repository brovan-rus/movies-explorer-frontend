import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import card1 from '../../images/card1.jpg';
import card2 from '../../images/card2.jpg';
import card3 from '../../images/card3.jpg';

function SavedMovies() {
  return (
    <main className="movies">
      <MoviesCardList>
        <MoviesCard
          place="saved-movies"
          image={card1}
          title={'33 слова о дизайне'}
          isSaved={false}
          length={'1 ч. 47м'}
        />
        <MoviesCard
          place="saved-movies"
          image={card2}
          title={'Киноальманах «100 лет дизайна»'}
          isSaved={true}
          length={'1ч 3м'}
        />
        <MoviesCard
          place="saved-movies"
          image={card3}
          title={'В погоне за Бенкси'}
          isSaved={true}
          length={'1ч 42м'}
        />
      </MoviesCardList>
      ;
    </main>
  );
}

export default SavedMovies;
