import React from 'react';
import PropTypes from 'prop-types';

const USorting = props => {
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
      <path d="M11.29 10.21a.999.999 0 001.42 0l3-3a1.004 1.004 0 10-1.42-1.42L12 8.09l-2.29-2.3a1.004 1.004 0 00-1.42 1.42l3 3zm1.42 4.58a1 1 0 00-1.42 0l-3 3a1.004 1.004 0 001.42 1.42l2.29-2.3 2.29 2.3a.999.999 0 001.42 0 1 1 0 000-1.42l-3-3z"></path>
    </svg>
  );
};

USorting.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USorting.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USorting;
