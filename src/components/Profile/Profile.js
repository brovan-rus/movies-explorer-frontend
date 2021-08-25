import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../utils/userHooks/useForm';
import FormError from '../FormError/FormError';
import { formErrorMessage, profileEditSuccessMessage } from '../../utils/constants';
import MessagePopup from '../MessagePopup/MessagePopup';

function Profile({ onLogout, onEdit, isError, isMessagePopupOpen }) {
  const user = React.useContext(CurrentUserContext);
  const form = useForm();

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
    <>
      <section className="profile app__text">
        <h1 className="profile__title">Привет, {user.name}!</h1>
        <form className="profile__form" noValidate={true}>
          <div className="profile__inputs-wrapper">
            <div className="profile__input-container">
              <label className="profile__form-label" htmlFor="name">
                Имя
              </label>
              <input
                onBlur={form.handleBlur}
                required={true}
                className="profile__input app__text"
                id="name"
                type="text"
                minLength={2}
                maxLength={31}
                value={form.values.name || ''}
                name="name"
                onChange={form.handleChange}
              />
              <FormError
                errorMessage={form.errors.name}
                isActive={form.errors.name && form.isValidationStarted.name}
                place="input-profile-edit"
                value={form.values.name || ''}
                name="name"
                onChange={form.handleChange}
              />
            </div>
            <div className="profile__input-container">
              <label className="profile__form-label" htmlFor="email">
                E-mail
              </label>
              <input
                onBlur={form.handleBlur}
                className="profile__input app__text"
                required={true}
                id="email"
                name="email"
                type="email"
                value={form.values.email || ''}
                onChange={form.handleChange}
              />
              <FormError
                errorMessage={form.errors.email}
                isActive={form.errors.email && form.isValidationStarted.email}
                place="input-profile-edit"
                id="name"
                name="email"
                type="text"
                value={form.values.email || ''}
                onChange={form.handleChange}
              />
            </div>
          </div>
          <div className="profile__button-container">
            <FormError errorMessage={formErrorMessage} isActive={isError} place="profile-edit" />
            <button
              disabled={
                !form.isValid ||
                (user.name === form.values.name && user.email === form.values.email)
              }
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
      <MessagePopup messageText={profileEditSuccessMessage} isActive={isMessagePopupOpen} />
    </>
  );
}

export default Profile;
