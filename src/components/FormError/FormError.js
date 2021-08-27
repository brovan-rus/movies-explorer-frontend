function FormError({ place, errorMessage, isActive }) {
  return (
    <span
      className={`form-error ${place ? `form-error_place_${place}` : ''} ${
        isActive ? 'form-error_active' : ''
      }`}
    >
      {errorMessage}
    </span>
  );
}

export default FormError;
