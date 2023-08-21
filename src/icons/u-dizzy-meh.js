import React from 'react';
import PropTypes from 'prop-types';

const UDizzyMeh = props => {
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
      <path d="M9 11.71l.29-.3.29.3a1.001 1.001 0 001.639-.325A1 1 0 0011 10.29l-.3-.29.3-.29a1.018 1.018 0 10-1.46-1.42l-.29.3-.25-.3a1.018 1.018 0 10-1.46 1.42l.3.29-.3.29a1.001 1.001 0 00.325 1.639 1 1 0 001.095-.219H9zM15 14H9a1 1 0 000 2h6a1 1 0 000-2zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm5-11.71a1 1 0 00-1.42 0l-.29.3-.29-.3a1.004 1.004 0 00-1.42 1.42l.3.29-.3.29a1.002 1.002 0 00.325 1.639A1 1 0 0015 11.71l.29-.3.29.3a1.002 1.002 0 001.639-.325A1 1 0 0017 10.29l-.3-.29.3-.29a1 1 0 000-1.42z"></path>
    </svg>
  );
};

UDizzyMeh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDizzyMeh.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDizzyMeh;
