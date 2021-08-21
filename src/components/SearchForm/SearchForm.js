import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import FormError from '../FormError/FormError';
import FormHandler from '../../utils/FormHandler';
import React from 'react';

function SearchForm({ onSearch, filterShortFilms }) {
  const [searchFormError, setSearchFormError] = React.useState({
    message: 'Запрос не может быть пустым',
    isError: false,
  });
  const form = FormHandler();
  const handleSetCheckbox = (isChecked) => {
    filterShortFilms(isChecked);
  };
  const searchFormErrorReset = () => {
    setSearchFormError({ ...searchFormError, isError: false });
  };

  React.useEffect(() => {
    form.resetForm();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!form.values.searchRequest) {
      setSearchFormError({ ...searchFormError, isError: true });
    } else {
      onSearch({ request: form.values.searchRequest });
    }
  };

  return (
    <div className="search-form">
      <form className="search-form__search-field" noValidate={true}>
        <input
          onFocus={searchFormErrorReset}
          name="searchRequest"
          required={true}
          type="text"
          placeholder="Фильмы"
          value={form.values.searchRequest || ''}
          className="search-form__input app__text"
          onChange={form.handleChange}
        />
        <FormError
          isActive={searchFormError.isError}
          errorMessage={searchFormError.message}
          place="input-search"
        />
        <button
          type="submit"
          className="search-form__button app__link"
          onClick={handleSearchSubmit}
        />
      </form>
      <FilterCheckbox onCheck={handleSetCheckbox} />
    </div>
  );
}

export default SearchForm;
