import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form">
      <fieldset className="search-form__search-field">
        <input type="text" placeholder="Фильмы" className="search-form__input app__text" />
        <button className="search-form__button app__link" />
      </fieldset>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
