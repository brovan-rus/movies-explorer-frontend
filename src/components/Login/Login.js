import React from 'react';
import AccountForm from '../AccountForm/AccountForm';
import FormHandler from '../FormHandler/FormHandler';

function Login({ onLoginSubmit, isError }) {
  const form = FormHandler();

  const handleLoginSubmit = () => {
    onLoginSubmit(form.values);
  };

  React.useEffect(() => {
    form.resetForm();
  }, []);

  return (
    <AccountForm
      title="Рады видеть!"
      buttonText="Войти"
      caption="Ещё не зарегистрированы?"
      link="/signup"
      linkText="Регистрация"
      isError={isError}
      onSubmit={handleLoginSubmit}
      isButtonDisabled={!form.isValid}
    >
      <div className="account-form__input-wrapper">
        <label className="account-form__label" htmlFor="name">
          E-mail
        </label>
        <input
          onBlur={form.handleBlur}
          required={true}
          name="email"
          id="email"
          className={`account-form__input ${
            form.errors.email && form.isValidationStarted.email && 'account-form__input_error'
          } app__text`}
          type="email"
          minLength={2}
          maxLength={31}
          value={form.values.email || ''}
          onChange={form.handleChange}
        />
        <span
          className={`account-form__error-message ${
            form.errors.email &&
            form.isValidationStarted.email &&
            'account-form__error-message_active'
          } account-form__error-message_place_input`}
        >
          {`${form.errors.email}`}
        </span>
      </div>
      <div className="account-form__input-wrapper">
        <label className="account-form__label" htmlFor="password">
          Пароль
        </label>
        <input
          onBlur={form.handleBlur}
          required={true}
          name="password"
          id="password"
          className={`account-form__input ${
            form.errors.password && form.isValidationStarted.password && 'account-form__input_error'
          } app__text`}
          type="password"
          minLength={3}
          value={form.values.password || ''}
          onChange={form.handleChange}
        />
        <span
          className={`account-form__error-message ${
            form.errors.password &&
            form.isValidationStarted.password &&
            'account-form__error-message_active'
          } account-form__error-message_place_input`}
        >
          {`${form.errors.password}`}
        </span>
      </div>
    </AccountForm>
  );
}

export default Login;
