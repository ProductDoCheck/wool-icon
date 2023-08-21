import React from 'react';
import PropTypes from 'prop-types';

const UPackage = props => {
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
      <path d="M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm-9 2h4v3.13l-1.45-1a1 1 0 00-1.1 0l-1.45 1V4zm10 15a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3v5a1 1 0 00.53.88 1 1 0 001-.05L12 8.2l2.45 1.63A1 1 0 0016 9V4h3a1 1 0 011 1v14z"></path>
    </svg>
  );
};

UPackage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPackage.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPackage;
