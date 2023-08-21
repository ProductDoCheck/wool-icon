import React from 'react';
import PropTypes from 'prop-types';

const UExchange = props => {
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
      <path d="M18 10a1 1 0 00-1-1H5.41l2.3-2.29a1.004 1.004 0 00-1.42-1.42l-4 4a1 1 0 00-.21 1.09A1 1 0 003 11h14a1 1 0 001-1zm3.92 3.62A1 1 0 0021 13H7a1 1 0 000 2h11.59l-2.3 2.29a1.001 1.001 0 00.325 1.639 1 1 0 001.095-.22l4-4a1 1 0 00.21-1.09z"></path>
    </svg>
  );
};

UExchange.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExchange.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExchange;
