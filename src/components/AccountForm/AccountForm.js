import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { formErrorMessage } from '../../utils/constants';

function AccountForm({
  children,
  title,
  buttonText,
  caption,
  link,
  linkText,
  isError,
  isButtonDisabled,
  onSubmit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="account-form app__text" onSubmit={handleSubmit}>
      <div className="account-form__container">
        <Logo />
        <h1 className="account-form__title">{title}</h1>
        <fieldset className="account-form__input-area">{children}</fieldset>
      </div>
      <div className="account-form__container">
        <span
          className={`account-form__error-message ${
            isError && 'account-form__error-message_active'
          }`}
        >
          {formErrorMessage}
        </span>
        <button
          type="submit"
          disabled={isButtonDisabled}
          className="account-form__button app__text app__link"
        >
          {buttonText}
        </button>
        <div className="account-form__caption-container">
          <p className="account-form__caption">{caption}</p>
          <Link to={link} className="app__link account-form__caption-link">
            {linkText}
          </Link>
        </div>
      </div>
    </form>
  );
}

export default AccountForm;
