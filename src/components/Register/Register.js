import React from 'react';
import AccountForm from '../AccountForm/AccountForm';
import { useForm } from '../FormHandler/FormHandler';

function Register({ onRegisterSubmit, isError }) {
  const handleRegisterFormSubmit = () => {
    onRegisterSubmit(form.values);
  };

  const form = useForm();
  React.useEffect(() => {
    form.resetForm();
  }, []);

  return (
    <AccountForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      caption="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
      isError={isError}
      isButtonDisabled={!form.isValid}
      onSubmit={handleRegisterFormSubmit}
    >
      <div className="account-form__input-wrapper">
        <label className="account-form__label" htmlFor="name">
          Имя
        </label>
        <input
          onBlur={form.handleBlur}
          required={true}
          id="name"
          name="name"
          className={`account-form__input ${
            form.errors.name && form.isValidationStarted.name && 'account-form__input_error'
          } app__text`}
          type="text"
          value={form.values.name || ''}
          minLength={2}
          maxLength={31}
          onChange={form.handleChange}
        />
        <span
          className={`account-form__error-message ${
            form.errors.name &&
            form.isValidationStarted.name &&
            'account-form__error-message_active'
          } account-form__error-message_place_input`}
        >
          {`${form.errors.name}`}
        </span>
      </div>
      <div className="account-form__input-wrapper">
        <label className="account-form__label" htmlFor="email">
          E-mail
        </label>

        <input
          onBlur={form.handleBlur}
          required={true}
          id="email"
          name="email"
          className={`account-form__input ${
            form.errors.email && form.isValidationStarted.email && 'account-form__input_error'
          } app__text`}
          type="email"
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
          id="password"
          name="password"
          className={`account-form__input ${
            form.errors.password && form.isValidationStarted.password && 'account-form__input_error'
          } app__text`}
          type="password"
          value={form.values.password || ''}
          minLength={3}
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

export default Register;
