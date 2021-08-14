import MoviesCard from '../MoviesCard/MoviesCard';
import card1 from '../../images/card1.jpg';
import card2 from '../../images/card2.jpg';
import card3 from '../../images/card3.jpg';
import card4 from '../../images/card4.jpg';
import card5 from '../../images/card5.jpg';
import card6 from '../../images/card6.jpg';
import card7 from '../../images/card7.jpg';
import card8 from '../../images/card8.jpg';
import card9 from '../../images/card9.png';
import card10 from '../../images/card10.jpg';
import card11 from '../../images/card11.jpg';
import card12 from '../../images/card12.jpg';

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        <li>
          <MoviesCard
            place="saved-movies"
            image={card1}
            title={'33 слова о дизайне'}
            isSaved={false}
            length={'1 ч. 47м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card2}
            title={'Киноальманах «100 лет дизайна»'}
            isSaved={true}
            length={'1ч 3м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card3}
            title={'В погоне за Бенкси'}
            isSaved={true}
            length={'1ч 42м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card4}
            title={'Баския: Взрыв реальности'}
            isSaved={false}
            length={'1ч 21м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card5}
            title={'Бег это свобода'}
            isSaved={false}
            length={'1ч 44м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card6}
            title={'Книготорговцы'}
            isSaved={true}
            length={'1ч 42м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card7}
            title={'Когда я думаю о Германии ночью'}
            isSaved={false}
            length={'1ч 42м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card8}
            title={'Gimme Danger: История Игги и The Stooges'}
            isSaved={false}
            length={'1ч 42м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card9}
            title={'Дженис: Маленькая девочка грустит'}
            isSaved={false}
            length={'1ч 42м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card10}
            title={'Соберись перед прыжком'}
            isSaved={true}
            length={'1ч 42м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card11}
            title={'Пи Джей Харви: A dog called money'}
            isSaved={true}
            length={'1ч 42м'}
          />
        </li>
        <li>
          <MoviesCard
            place="movies"
            image={card12}
            title={'По волнам: Искусство звука в кино'}
            isSaved={true}
            length={'1ч 42м'}
          />
        </li>
      </ul>
      <div className="movies-card-list__button-wrapper">
        <button className="movies-card-list__button" />
      </div>
    </section>
  );
}

export default MoviesCardList;
