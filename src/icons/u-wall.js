import React from 'react';
import PropTypes from 'prop-types';

const UWall = props => {
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
      <path d="M21 9a1 1 0 100-2h-1V5h1a1 1 0 100-2H3a1 1 0 000 2h3v2H3a1 1 0 000 2h1v2H3a1 1 0 000 2h3v2H3a1 1 0 000 2h1v2H3a1 1 0 000 2h18a1 1 0 000-2h-3v-2h3a1 1 0 000-2h-1v-2h1a1 1 0 000-2h-3V9h3zM8 5h4v2H8V5zm8 4v2h-4V9h4zM6 9h4v2H6V9zm6 4v2H8v-2h4zm-2 6H6v-2h4v2zm6 0h-4v-2h4v2zm2-4h-4v-2h4v2zm-4-8V5h4v2h-4z"></path>
    </svg>
  );
};

UWall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWall.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWall;
