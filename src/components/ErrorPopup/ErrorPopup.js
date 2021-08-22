function ErrorPopup({ errorText, isActive }) {
  return (
    <div className={`error-popup ${isActive ? 'error-popup_active' : ''}`}>
      <div className="error-popup__container">
        <p className="error-popup__text app__text">{errorText}</p>
      </div>
    </div>
  );
}

export default ErrorPopup;
