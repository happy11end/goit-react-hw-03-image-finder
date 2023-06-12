import css from './Button.module.css'; // імпортуємо стилі
import PropTypes from 'prop-types'; // типизація пропсів

// Функціональний компонент, який відповідає за кнопку "Load more".
export const Button = ({ clickLoad }) => {
  return (
    <button onClick={clickLoad} className={css.Button} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  clickLoad: PropTypes.func.isRequired,
};