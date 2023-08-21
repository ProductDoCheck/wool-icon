import React from 'react';
import PropTypes from 'prop-types';

const UWindow = props => {
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
      <path d="M10 5a1 1 0 100 2 1 1 0 000-2zM6 5a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2zm6-4H4a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3V4a3 3 0 00-3-3zm1 19a1 1 0 01-1 1H4a1 1 0 01-1-1v-9h18v9zm0-11H3V4a1 1 0 011-1h16a1 1 0 011 1v5z"></path>
    </svg>
  );
};

UWindow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWindow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWindow;
