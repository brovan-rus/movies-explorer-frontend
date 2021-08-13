import React from 'react';

function FilterCheckbox() {
  const [isFilterCheckboxChecked, setIsFilterCheckboxChecked] = React.useState(false);
  const handleFilterCheckboxClick = () => {
    setIsFilterCheckboxChecked(!isFilterCheckboxChecked);
  };
  return (
    <div className="filter-checkbox">
      <p className="app__text filter-checkbox__text">Короткометражки</p>
      <label className="filter-checkbox__label" htmlFor="filter-checkbox">
        <input
          id="filter-checkbox"
          type="checkbox"
          className="filter-checkbox__checkbox-invisible"
          checked={isFilterCheckboxChecked}
          onClick={handleFilterCheckboxClick}
        />
        <div className="filter-checkbox__button" />
      </label>
    </div>
  );
}

export default FilterCheckbox;
