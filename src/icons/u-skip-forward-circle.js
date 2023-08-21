import React from 'react';
import PropTypes from 'prop-types';

const USkipForwardCircle = props => {
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
      <path d="M15.5 7a1 1 0 00-1 1v1.69l-4-2.31a2 2 0 00-3 1.73v5.78a2 2 0 003 1.73l4-2.31V16a1 1 0 002 0V8a1 1 0 00-1-1zm-1 5l-5 2.89V9.11l5 2.88V12zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

USkipForwardCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USkipForwardCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USkipForwardCircle;
