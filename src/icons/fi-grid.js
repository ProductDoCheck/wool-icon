import React from 'react';
import PropTypes from 'prop-types';

const FiGrid = props => {
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
      <path d="M21 14h-7v7h7v-7z"></path>
      <path d="M10 14H3v7h7v-7z"></path>
      <path d="M21 3h-7v7h7V3z"></path>
      <path d="M10 3H3v7h7V3z"></path>
    </svg>
  );
};

FiGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiGrid.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiGrid;
