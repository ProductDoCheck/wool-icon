import React from 'react';
import PropTypes from 'prop-types';

const USignInAlt = props => {
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
      <path d="M20.5 15.1a1 1 0 00-1.34.45A8 8 0 1112 4a7.93 7.93 0 017.16 4.45 1.006 1.006 0 001.8-.9 10 10 0 100 8.9 1 1 0 00-.46-1.35zM21 11h-9.59l2.3-2.29A1.005 1.005 0 0013 6.996a1.004 1.004 0 00-.71.294l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l4 4a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L11.41 13H21a1 1 0 100-2z"></path>
    </svg>
  );
};

USignInAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USignInAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USignInAlt;
