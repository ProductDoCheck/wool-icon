import React from 'react';
import PropTypes from 'prop-types';

const UArrowsVAlt = props => {
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
      <path d="M10.21 6.21l.79-.8V10a1 1 0 002 0V5.41l.79.8a1 1 0 001.639-.325 1 1 0 00-.219-1.095l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1.004 1.004 0 001.42 1.42zm3.58 11.58l-.79.8V14a1 1 0 00-2 0v4.59l-.79-.8a1.005 1.005 0 00-1.42 1.42l2.5 2.5c.095.091.207.162.33.21a.94.94 0 00.76 0 1 1 0 00.33-.21l2.5-2.5a1.004 1.004 0 10-1.42-1.42z"></path>
    </svg>
  );
};

UArrowsVAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowsVAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowsVAlt;
