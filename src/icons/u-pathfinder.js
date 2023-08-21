import React from 'react';
import PropTypes from 'prop-types';

const UPathfinder = props => {
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
      <path d="M4 14.46a1 1 0 10-2 0v1a1 1 0 001 1h1a1 1 0 000-2zM8.18 4h2.1a1 1 0 100-2h-2.1a1 1 0 000 2zm6.28 0a1 1 0 002 0V3a1 1 0 00-1-1h-1a1 1 0 100 2zM4 2H3a1 1 0 00-1 1v1a1 1 0 002 0 1 1 0 000-2zm-1 9.28a1 1 0 001-1v-2.1a1 1 0 00-2 0v2.1a1 1 0 001 1zM15.82 20h-2.1a1 1 0 000 2h2.1a1 1 0 000-2zM21 7.54h-1a1 1 0 100 2 1 1 0 002 0v-1a1 1 0 00-1-1zm0 5.18a1 1 0 00-1 1v2.1a1 1 0 002 0v-2.1a1 1 0 00-1-1zm-4.54-5.18a1 1 0 00-2 0H8.54a1 1 0 00-1 1v5.92a1 1 0 000 2 1 1 0 102 0h5.92a1.001 1.001 0 001-1V9.54a1 1 0 100-2zm-2 6.92H9.54V9.54h4.92v4.92zM21 19a1 1 0 00-1 1 1 1 0 000 2h1a1 1 0 001-1v-1a1 1 0 00-1-1zM9.54 20a1 1 0 10-2 0v1a1 1 0 001 1h1a1 1 0 000-2z"></path>
    </svg>
  );
};

UPathfinder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPathfinder.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPathfinder;
