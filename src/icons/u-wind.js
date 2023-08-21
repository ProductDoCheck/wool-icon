import React from 'react';
import PropTypes from 'prop-types';

const UWind = props => {
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
      <path d="M3.5 9a1 1 0 100-2 1 1 0 000 2zm4 0h7A3 3 0 1013 3.4a1 1 0 101 1.73 1.09 1.09 0 01.5-.13 1 1 0 110 2h-7a1 1 0 000 2zm-4 4h7a1 1 0 000-2h-7a1 1 0 000 2zm17-4a1 1 0 100-2 1 1 0 000 2zm-2 2h-4a1 1 0 000 2h4a1 1 0 010 2 1 1 0 000 2 3 3 0 000-6zm-6 4h-4a1 1 0 000 2h4a1 1 0 010 2 1.089 1.089 0 01-.5-.13 1 1 0 10-1 1.73 3 3 0 101.5-5.6zm-8 0h-1a1 1 0 000 2h1a1 1 0 000-2z"></path>
    </svg>
  );
};

UWind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWind.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWind;
