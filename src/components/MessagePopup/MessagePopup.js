function MessagePopup({ messageText, isActive }) {
  return (
    <div className={`message-popup ${isActive ? 'message-popup_active' : ''}`}>
      <div className="message-popup__container">
        <p className="message-popup__text app__text">{messageText}</p>
      </div>
    </div>
  );
}

export default MessagePopup;
