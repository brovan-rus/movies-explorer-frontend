import { useHistory } from 'react-router-dom';
function ErrorMessage({ title, text }) {
  const history = useHistory();
  return (
    <div className="error-message app__text">
      <h1 className="error-message__title">{title}</h1>
      <p className="error-message__text">{text}</p>
      <button onClick={() => history.goBack()} className="error-message__button app__link">
        Назад
      </button>
    </div>
  );
}

export default ErrorMessage;
