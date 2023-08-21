import React from 'react';
import PropTypes from 'prop-types';

const UBoombox = props => {
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
      <path d="M17 2H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1v14zm-3.62-8.2A3 3 0 0015 9a3 3 0 00-6 0 3 3 0 00.62 1.8 4 4 0 104.76 0zM12 8a1 1 0 110 2 1 1 0 010-2zm0 8a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};

UBoombox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBoombox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBoombox;
