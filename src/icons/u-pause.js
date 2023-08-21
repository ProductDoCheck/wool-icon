import React from 'react';
import PropTypes from 'prop-types';

const UPause = props => {
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
      <path d="M16 2a3 3 0 00-3 3v14a3 3 0 006 0V5a3 3 0 00-3-3zm1 17a1 1 0 01-2 0V5a1 1 0 012 0v14zM8 2a3 3 0 00-3 3v14a3 3 0 006 0V5a3 3 0 00-3-3zm1 17a1 1 0 11-2 0V5a1 1 0 012 0v14z"></path>
    </svg>
  );
};

UPause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPause.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPause;
