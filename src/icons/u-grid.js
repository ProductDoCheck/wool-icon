import React from 'react';
import PropTypes from 'prop-types';

const UGrid = props => {
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
      <path d="M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zM11 20H4v-4h7v4zm0-6H4v-4h7v4zm9 6h-7v-4h7v4zm0-6h-7v-4h7v4zm0-6H4V4h16v4z"></path>
    </svg>
  );
};

UGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGrid.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGrid;
