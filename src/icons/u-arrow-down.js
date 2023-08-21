import React from 'react';
import PropTypes from 'prop-types';

const UArrowDown = props => {
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
      <path d="M17.71 11.29a1.002 1.002 0 00-1.42 0L13 14.59V7a1 1 0 00-2 0v7.59l-3.29-3.3a1.004 1.004 0 10-1.42 1.42l5 5c.095.091.207.162.33.21a.94.94 0 00.76 0 1 1 0 00.33-.21l5-5a1.002 1.002 0 000-1.42z"></path>
    </svg>
  );
};

UArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowDown;
