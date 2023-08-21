import React from 'react';
import PropTypes from 'prop-types';

const UCoins = props => {
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
      <path d="M21.22 12a3 3 0 00.78-2 3 3 0 00-3-3h-5.18A3 3 0 0011 3H5a3 3 0 00-3 3 3 3 0 00.78 2 3 3 0 000 4 3 3 0 000 4A3 3 0 002 18a3 3 0 003 3h14a3 3 0 002.22-5 3 3 0 000-4zM11 19H5a1 1 0 010-2h6a1 1 0 010 2zm0-4H5a1 1 0 010-2h6a1 1 0 010 2zm0-4H5a1 1 0 010-2h6a1 1 0 110 2zm0-4H5a1 1 0 010-2h6a1 1 0 110 2zm8.69 11.71A.93.93 0 0119 19h-5.18a2.87 2.87 0 000-2H19a1 1 0 011 1 1 1 0 01-.31.71zm0-4A.93.93 0 0119 15h-5.18a2.87 2.87 0 000-2H19a1 1 0 011 1 1 1 0 01-.31.71zm0-4A.93.93 0 0119 11h-5.18a2.87 2.87 0 000-2H19a1 1 0 011 1 1 1 0 01-.31.71z"></path>
    </svg>
  );
};

UCoins.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCoins.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCoins;
