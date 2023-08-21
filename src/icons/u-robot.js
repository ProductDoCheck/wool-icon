import React from 'react';
import PropTypes from 'prop-types';

const URobot = props => {
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
      <path d="M9 15a1 1 0 100 2 1 1 0 000-2zm-7-1a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1zm20 0a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm-5-7h-4V5.72A2 2 0 0014 4a2 2 0 10-4 0 2 2 0 001 1.72V7H7a3 3 0 00-3 3v9a3 3 0 003 3h10a3 3 0 003-3v-9a3 3 0 00-3-3zm-3.28 2l-.5 2h-2.44l-.5-2h3.44zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1v-9a1 1 0 011-1h1.22L9 12.24a1 1 0 001 .76h4a1 1 0 001-.76L15.78 9H17a1 1 0 011 1v9zm-3-4a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

URobot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URobot.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URobot;
