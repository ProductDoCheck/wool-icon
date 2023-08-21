import React from 'react';
import PropTypes from 'prop-types';

const UCheck = props => {
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
      <path d="M18.71 7.21a.999.999 0 00-1.42 0l-7.45 7.46-3.13-3.14A1.02 1.02 0 105.29 13l3.84 3.84a1 1 0 001.42 0l8.16-8.16a.999.999 0 000-1.47z"></path>
    </svg>
  );
};

UCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCheck;
