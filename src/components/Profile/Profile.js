import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import FormHandler from '../FormHandler/FormHandler';

function Profile({ onLogout, onEdit }) {
  const user = React.useContext(CurrentUserContext);
  const form = FormHandler();

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(form.values);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
  };

  React.useEffect(() => {
    form.resetForm(user);
  }, [user]);

  return (
    <section className="profile app__text">
      <h1 className="profile__title">Привет, {user.name}!</h1>
      <form className="profile__form">
        <div className="profile__inputs-wrapper">
          <div className="profile__input-container">
            <label className="profile__form-label" htmlFor="name">
              Имя
            </label>
            <input
              className="profile__input app__text"
              id="name"
              type="text"
              value={form.values.name || ''}
              name="name"
              onChange={form.handleChange}
            />
          </div>
          <div className="profile__input-container">
            <label className="profile__form-label" htmlFor="name">
              E-mail
            </label>
            <input
              className="profile__input app__text"
              id="name"
              name="email"
              type="text"
              value={form.values.email || ''}
              onChange={form.handleChange}
            />
          </div>
        </div>
        <div className="profile__button-container">
          <button
            onClick={handleSubmit}
            type="submit"
            className="profile__button  app__text app__link"
          >
            Редактировать
          </button>
          <button
            onClick={handleLogout}
            className="profile__button profile__button_color_red app__text app__link"
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
