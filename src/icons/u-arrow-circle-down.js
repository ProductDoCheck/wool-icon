import React from 'react';
import PropTypes from 'prop-types';

const UArrowCircleDown = props => {
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
      <path d="M11.29 15.71a1 1 0 00.33.21 1 1 0 00.76 0 1 1 0 00.33-.21l3-3a1.004 1.004 0 10-1.42-1.42L13 12.59V9a1 1 0 00-2 0v3.59l-1.29-1.3a1 1 0 00-1.639.325 1 1 0 00.219 1.095l3 3zM12 22a10 10 0 100-20 10 10 0 000 20zm0-18a8 8 0 110 16 8 8 0 010-16z"></path>
    </svg>
  );
};

UArrowCircleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowCircleDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowCircleDown;
