import React from 'react';
import PropTypes from 'prop-types';

const UExposureIncrease = props => {
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
      <path d="M11 7h-1V6a1 1 0 00-2 0v1H7a1 1 0 000 2h1v1a1 1 0 102 0V9h1a1 1 0 100-2zm2 11h4a1 1 0 000-2h-4a1 1 0 000 2zm6-16H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zM4 18.59V5a1 1 0 011-1h13.59L4 18.59zM20 19a1 1 0 01-1 1H5.41L20 5.41V19z"></path>
    </svg>
  );
};

UExposureIncrease.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExposureIncrease.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExposureIncrease;
