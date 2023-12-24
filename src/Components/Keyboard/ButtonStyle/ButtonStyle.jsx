// ButtonStyle.jsx
import PropTypes from "prop-types";

export const ButtonStyle = ({
  number,
  isDoubleWidth,
  isTripleWidth,
  isSpecial,
  isSymbol,
  isPlusMinus,
  onClick,
}) => {
  const buttonClasses = `bg-opacity-75 text-white font-bold rounded-full h-[90px] w-[90px] 
  ${
    isDoubleWidth
      ? "col-span-2 w-auto max-w-[189px] flex items-center px-8"
      : ""
  } 
  ${isTripleWidth ? "col-start-3" : ""} 
  ${
    isSpecial
      ? "bg-[rgb(165,165,165)]"
      : isSymbol
      ? "bg-[rgb(255,170,55)]"
      : "bg-[rgb(51,51,51)]"
  } 
  ${isPlusMinus ? "text-[32px]" : "text-[40px]"}
  `;

  const handleClick = () => {
    onClick(number);
  };
  return (
    <button onClick={handleClick} className={buttonClasses}>
      {number}
    </button>
  );
};

ButtonStyle.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDoubleWidth: PropTypes.bool,
  isTripleWidth: PropTypes.bool,
  isSpecial: PropTypes.bool,
  isSymbol: PropTypes.bool,
  isPlusMinus: PropTypes.bool,
  onClick: PropTypes.func,
};
