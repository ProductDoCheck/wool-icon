import React from 'react';
import PropTypes from 'prop-types';

const UThermometer = props => {
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
      <path d="M16.29 6.29l-7 7a1 1 0 00.325 1.639 1 1 0 001.095-.219l7-7a1.004 1.004 0 00-1.42-1.42zm4.25-2.83a5 5 0 00-7.08 0l-8.17 8.23a1 1 0 00-.29.7v5.19l-2.71 2.71a1 1 0 00.325 1.639 1 1 0 001.095-.219L6.42 19h5.19a1 1 0 00.7-.29l8.23-8.17a4.999 4.999 0 000-7.08zm-1.42 5.66L11.2 17H7v-4.2l7.88-7.92a3 3 0 014.24 4.24z"></path>
    </svg>
  );
};

UThermometer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UThermometer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UThermometer;
