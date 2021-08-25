import React from 'react';
import AccountForm from '../AccountForm/AccountForm';
import useForm from '../../utils/userHooks/useForm';
import FormError from '../FormError/FormError';

function Login({ onLoginSubmit, isError }) {
  const form = useForm();
  const handleLoginSubmit = () => {
    onLoginSubmit(form.values);
  };
  React.useEffect(() => form.resetForm(), []);

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
        <FormError
          errorMessage={form.errors.email}
          isActive={form.errors.email && form.isValidationStarted.email}
          place="input"
        />
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
        <FormError
          errorMessage={form.errors.password}
          isActive={form.errors.password && form.isValidationStarted.password}
          place="input"
        />
      </div>
    </AccountForm>
  );
}

export default Login;
