import React from 'react';
import PropTypes from 'prop-types';

const USortAmountDown = props => {
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
      <path d="M6.29 14.29l-.29.3V7a1 1 0 10-2 0v7.59l-.29-.3a1.004 1.004 0 10-1.42 1.42l2 2a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2-2a1.003 1.003 0 10-1.42-1.42zM11 8h10a1 1 0 100-2H11a1 1 0 100 2zm10 3H11a1 1 0 000 2h10a1 1 0 000-2zm0 5H11a1 1 0 000 2h10a1 1 0 000-2z"></path>
    </svg>
  );
};

USortAmountDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USortAmountDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USortAmountDown;
