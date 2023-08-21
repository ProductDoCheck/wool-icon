import React from 'react';
import PropTypes from 'prop-types';

const USigma = props => {
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
      <path d="M16 16h-5.59l3.3-3.29a1.002 1.002 0 000-1.42L10.41 8H16a1 1 0 100-2H8a1 1 0 00-.92.62 1 1 0 00.21 1.09l4.3 4.29-4.3 4.29a1 1 0 00-.21 1.09A1 1 0 008 18h8a1 1 0 000-2z"></path>
    </svg>
  );
};

USigma.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USigma.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USigma;
