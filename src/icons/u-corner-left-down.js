import React from 'react';
import PropTypes from 'prop-types';

const UCornerLeftDown = props => {
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
      <path d="M21 4.31h-9.37a5 5 0 00-5 5v7l-2.92-2.96a1 1 0 10-1.42 1.41l4.63 4.63a1 1 0 00.33.22.94.94 0 00.76 0c.122-.054.233-.129.33-.22L13 14.76a1 1 0 00-1.41-1.41l-2.96 2.92v-7a3 3 0 013-3H21a1 1 0 000-2v.04z"></path>
    </svg>
  );
};

UCornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCornerLeftDown;
