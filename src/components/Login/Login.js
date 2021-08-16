import React from 'react';
import AccountForm from '../AccountForm/AccountForm';

function Login() {
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();
  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  return (
    <AccountForm
      title="Рады видеть!"
      buttonText="Войти"
      caption="Ещё не зарегистрированы?"
      link="/signup"
      linkText="Регистрация"
      isError={false}
    >
      <label className="account-form__label" htmlFor="name">
        Имя
      </label>
      <input
        required="true"
        id="name"
        className="account-form__input app__text"
        type="text"
        value={name}
        onChange={handleNameInput}
      />
      <label className="account-form__label" htmlFor="password">
        Пароль
      </label>
      <input
        required="true"
        id="password"
        className="account-form__input account-form__input_error app__text"
        type="password"
        value={password}
        onChange={handlePasswordInput}
      />
    </AccountForm>
  );
}

export default Login;
