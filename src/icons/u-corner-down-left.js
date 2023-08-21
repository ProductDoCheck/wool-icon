import React from 'react';
import PropTypes from 'prop-types';

const UCornerDownLeft = props => {
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
      <path d="M18.69 2a1 1 0 00-1 1v10.37a2 2 0 01-2 2h-8l2.92-2.92A1 1 0 009.24 11l-4.63 4.66a1.191 1.191 0 00-.22.33 1 1 0 00.22 1.09l4.63 4.63a1 1 0 001.41-1.42l-2.92-2.92h8a4 4 0 004-4V3a1 1 0 00-1.04-1z"></path>
    </svg>
  );
};

UCornerDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCornerDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCornerDownLeft;
