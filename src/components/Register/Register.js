import React from 'react';
import AccountForm from '../AccountForm/AccountForm';

function Register() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  return (
    <AccountForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      caption="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
      isError={true}
    >
      <label className="account-form__label" htmlFor="name">
        Имя
      </label>
      <input
        required
        id="name"
        className="account-form__input app__text"
        type="text"
        value={name}
        onChange={handleNameInput}
      />
      <label className="account-form__label" htmlFor="email">
        E-mail
      </label>
      <input
        required
        id="email"
        className="account-form__input app__text"
        type="email"
        value={email}
        onChange={handleEmailInput}
      />
      <label className="account-form__label" htmlFor="password">
        Пароль
      </label>
      <input
        required
        id="password"
        className="account-form__input account-form__input_error app__text"
        type="password"
        value={password}
        onChange={handlePasswordInput}
      />
    </AccountForm>
  );
}

export default Register;
