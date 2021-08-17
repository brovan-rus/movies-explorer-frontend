import React from 'react';
import AccountForm from '../AccountForm/AccountForm';
import { userFormValidation } from '../../utils/utils';
import { formValidationErrorMessage } from '../../utils/constants';

function Register({ onRegisterFormSubmit, isError }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const handleRegisterFormSubmit = () => {
    onRegisterFormSubmit(name, email, password);
  };
  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const [isValidationStarted, setIsValidationStarted] = React.useState({
    email: false,
    name: false,
    password: false,
  });
  const startEmailValidation = () => {
    setIsValidationStarted({ ...isValidationStarted, email: true });
  };
  const startNameValidation = () => setIsValidationStarted({ ...isValidationStarted, name: true });
  const startPasswordValidation = () =>
    setIsValidationStarted({ ...isValidationStarted, password: true });

  const validation = userFormValidation(name, email, password);
  console.log(validation);

  React.useEffect(() => {
    if (validation.name && validation.email && validation.password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [validation]);

  return (
    <AccountForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      caption="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
      isError={isError}
      isButtonDisabled={isButtonDisabled}
      onSubmit={handleRegisterFormSubmit}
    >
      <div className="account-form__input-wrapper">
        <label className="account-form__label" htmlFor="name">
          Имя
        </label>
        <input
          onBlur={startNameValidation}
          required={true}
          id="name"
          className={`account-form__input ${
            !validation.name && isValidationStarted.name && 'account-form__input_error'
          } app__text`}
          type="text"
          value={name}
          onChange={handleNameInput}
        />
        <span
          className={`account-form__error-message ${
            !validation.name && isValidationStarted.name && 'account-form__error-message_active'
          } account-form__error-message_place_input`}
        >
          {`${!validation.name && isValidationStarted.name && formValidationErrorMessage}`}
        </span>
      </div>
      <div className="account-form__input-wrapper">
        <label className="account-form__label" htmlFor="email">
          E-mail
        </label>

        <input
          onBlur={startEmailValidation}
          required={true}
          id="email"
          className={`account-form__input ${
            !validation.email && isValidationStarted.email && 'account-form__input_error'
          } app__text`}
          type="email"
          value={email}
          onChange={handleEmailInput}
        />
        <span
          className={`account-form__error-message ${
            !validation.email && isValidationStarted.email && 'account-form__error-message_active'
          } account-form__error-message_place_input`}
        >
          {`${!validation.email && isValidationStarted.name && formValidationErrorMessage}`}
        </span>
      </div>
      <div className="account-form__input-wrapper">
        <label className="account-form__label" htmlFor="password">
          Пароль
        </label>
        <input
          onBlur={startPasswordValidation}
          required={true}
          id="password"
          className={`account-form__input ${
            !validation.password && isValidationStarted.password && 'account-form__input_error'
          } app__text`}
          type="password"
          value={password}
          onChange={handlePasswordInput}
        />
        <span
          className={`account-form__error-message ${
            !validation.password &&
            isValidationStarted.password &&
            'account-form__error-message_active'
          } account-form__error-message_place_input`}
        >
          {`${!validation.password && isValidationStarted.password && formValidationErrorMessage}`}
        </span>
      </div>
    </AccountForm>
  );
}

export default Register;
