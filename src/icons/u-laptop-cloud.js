import React from 'react';
import PropTypes from 'prop-types';

const ULaptopCloud = props => {
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
      <path d="M4.5 10H10a3 3 0 001.07-5.8 4 4 0 00-7.48 1A2.5 2.5 0 004.5 10zm0-3a1 1 0 001-1 2 2 0 013.89-.64 1 1 0 00.78.66A1 1 0 0111 7a1 1 0 01-1 1H4.5a.5.5 0 110-1zM21 16h-1V9a3 3 0 00-3-3h-1a1 1 0 100 2h1a1 1 0 011 1v7H6v-3a1 1 0 10-2 0v3H3a1 1 0 00-1 1v2a3 3 0 003 3h14a3 3 0 003-3v-2a1 1 0 00-1-1zm-1 3a1 1 0 01-1 1H5a1 1 0 01-1-1v-1h16v1z"></path>
    </svg>
  );
};

ULaptopCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULaptopCloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULaptopCloud;
