import React from 'react';

function FilterCheckbox({ onCheck }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleFilterCheckboxClick = (e) => {
    setIsChecked(!isChecked);
    onCheck(!isChecked);
  };

  return (
    <div className="filter-checkbox">
      <p className="app__text filter-checkbox__text">Короткометражки</p>
      <label className="filter-checkbox__label" htmlFor="filter-checkbox">
        <input
          id="filter-checkbox"
          type="checkbox"
          className="filter-checkbox__checkbox-invisible"
          checked={isChecked}
          onChange={handleFilterCheckboxClick}
        />
        <div className="filter-checkbox__button" />
      </label>
    </div>
  );
}

export default FilterCheckbox;
