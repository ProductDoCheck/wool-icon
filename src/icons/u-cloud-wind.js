import React from 'react';
import PropTypes from 'prop-types';

const UCloudWind = props => {
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
      <path d="M5 18a1 1 0 100 2 1 1 0 000-2zm14-4h-7a1 1 0 100 2h7a1 1 0 110 2 1 1 0 100 2 3 3 0 000-6zm-5-3a1 1 0 001 1h4a3 3 0 003-3 1 1 0 10-2 0 1 1 0 01-1 1h-4a1 1 0 00-1 1zm-4 4a1 1 0 00-1-1H6a2 2 0 110-4 1 1 0 001-1 5 5 0 019.73-1.61 1.003 1.003 0 001.9-.64A7 7 0 005.06 8.11 4 4 0 006 16h3a1 1 0 001-1zm0-4a1 1 0 102.002 0A1 1 0 0010 11zm4 7H9a1 1 0 100 2h5a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3z"></path>
    </svg>
  );
};

UCloudWind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudWind.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudWind;
