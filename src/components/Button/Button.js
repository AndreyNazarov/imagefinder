import "./ButtonStyles.css";
import PropTypes from "prop-types";

export default function Button({ onClick }) {
  const scroll = () => {
    onClick();
  };

  return (
    <button onClick={scroll} type="button" className="Button">
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
