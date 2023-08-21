import React from 'react';
import PropTypes from 'prop-types';

const UCameraPlus = props => {
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
      <path d="M20 10.5a1 1 0 00-1 1v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h2a1 1 0 001-.68l.54-1.64a1 1 0 01.95-.68H14a1 1 0 100-2H8.44A3 3 0 005.6 6.55l-.32 1H4a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-7a1 1 0 00-1-1.05zm-9-1a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm11-11h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 002 0v-1h1a1 1 0 100-2z"></path>
    </svg>
  );
};

UCameraPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCameraPlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCameraPlus;
