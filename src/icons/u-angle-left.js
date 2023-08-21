import React from 'react';
import PropTypes from 'prop-types';

const UAngleLeft = props => {
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
      <path d="M11.29 12l3.54-3.54a1 1 0 10-1.42-1.41l-4.24 4.24a1.001 1.001 0 000 1.42L13.41 17a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.41L11.29 12z"></path>
    </svg>
  );
};

UAngleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAngleLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAngleLeft;
