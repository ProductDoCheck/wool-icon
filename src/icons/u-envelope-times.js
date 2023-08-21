import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeTimes = props => {
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
      <path d="M21 11a1 1 0 00-1 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V8.41l5.88 5.89a3 3 0 002.11.87 3.08 3.08 0 002.16-.9l1.72-1.72a1.004 1.004 0 10-1.42-1.42l-1.75 1.75a1 1 0 01-1.4 0L5.41 7H13a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zm-.59-5l1.3-1.29a1.004 1.004 0 10-1.42-1.42L19 4.59l-1.29-1.3a1.003 1.003 0 10-1.42 1.42L17.59 6l-1.3 1.29a1.001 1.001 0 00.325 1.639 1 1 0 001.095-.22L19 7.41l1.29 1.3a1 1 0 001.639-.324 1 1 0 00-.219-1.095L20.41 6z"></path>
    </svg>
  );
};

UEnvelopeTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeTimes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeTimes;
