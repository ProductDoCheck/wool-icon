import React from 'react';
import PropTypes from 'prop-types';

const UCropAltRotateLeft = props => {
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
      <path d="M9.71 16.29a1.005 1.005 0 00-1.714.71 1.004 1.004 0 00.294.71l.3.29H8a3 3 0 01-3-3v-2a1 1 0 10-2 0v2a5 5 0 005 5h.59l-.3.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l2-2a1.002 1.002 0 000-1.42l-2-2zM20 12h-1V5a1 1 0 00-1-1h-7V3a1 1 0 00-2 0v1H8a1 1 0 000 2h1v7a1 1 0 001 1h7v1a1 1 0 002 0v-1h1a1 1 0 000-2zm-3 0h-6V6h6v6z"></path>
    </svg>
  );
};

UCropAltRotateLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCropAltRotateLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCropAltRotateLeft;
