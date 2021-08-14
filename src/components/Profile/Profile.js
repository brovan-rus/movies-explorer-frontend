import React from 'react';

function Profile({ user }) {
  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);
  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogout = (e) => {
    e.preventDefault();
  };

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
              value={name}
              onChange={handleNameInput}
            />
          </div>
          <div className="profile__input-container">
            <label className="profile__form-label" htmlFor="name">
              E-mail
            </label>
            <input
              className="profile__input app__text"
              id="name"
              type="text"
              value={email}
              onChange={handleEmailInput}
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
