import React from 'react';
import PropTypes from 'prop-types';

const UDiceThree = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M12 11a1 1 0 100 2 1 1 0 000-2zM8 7a1 1 0 100 2 1 1 0 000-2zm9-5H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zm3 15a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10a3 3 0 013 3v10zm-4-2a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UDiceThree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDiceThree.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDiceThree;