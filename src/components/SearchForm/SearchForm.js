import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form">
      <form className="search-form__search-field">
        <input required type="text" placeholder="Фильмы" className="search-form__input app__text" />
        <button className="search-form__button app__link" />
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
