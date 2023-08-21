import React from 'react';
import PropTypes from 'prop-types';

const UPadlock = props => {
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
      <path d="M12 13a1.49 1.49 0 00-1 2.61V17a1 1 0 002 0v-1.39A1.49 1.49 0 0012 13zm5-4V7A5 5 0 007 7v2a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-7a3 3 0 00-3-3zM9 7a3 3 0 116 0v2H9V7zm9 12a1 1 0 01-1 1H7a1 1 0 01-1-1v-7a1 1 0 011-1h10a1 1 0 011 1v7z"></path>
    </svg>
  );
};

UPadlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPadlock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPadlock;
