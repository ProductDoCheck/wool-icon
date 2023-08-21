import React from 'react';
import PropTypes from 'prop-types';

const UKeyboard = props => {
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
      <path d="M6.21 13.29a.93.93 0 00-.33-.21 1 1 0 00-.76 0 .9.9 0 00-.54.54 1 1 0 101.84 0 1 1 0 00-.21-.33zM13.5 11h1a1 1 0 000-2h-1a1 1 0 100 2zm-4 0h1a1 1 0 000-2h-1a1 1 0 000 2zm-3-2h-1a1 1 0 000 2h1a1 1 0 000-2zM20 5H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3V8a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h16a1 1 0 011 1v8zm-6-3H9a1 1 0 000 2h6a1 1 0 000-2zm3.5-4h-1a1 1 0 100 2h1a1 1 0 000-2zm.71 4.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 .93.93 0 00-.33.21 1 1 0 00-.21.33 1 1 0 101.92.38.84.84 0 00-.08-.38 1 1 0 00-.21-.33z"></path>
    </svg>
  );
};

UKeyboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UKeyboard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UKeyboard;
