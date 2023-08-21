import React from 'react';
import PropTypes from 'prop-types';

const USearchAlt = props => {
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
      <path d="M21.07 16.83L19 14.71a3.08 3.08 0 00-3.4-.57l-.9-.9a7 7 0 10-1.41 1.41l.89.89a3 3 0 00.53 3.46l2.12 2.12a3 3 0 004.24 0 3.001 3.001 0 000-4.29zm-8.48-4.24a5 5 0 11-7.063-7.082 5 5 0 017.063 7.082zm7.07 7.07a1.002 1.002 0 01-1.42 0l-2.12-2.12a1.002 1.002 0 01.325-1.639 1 1 0 011.095.219l2.12 2.12a1.002 1.002 0 010 1.42z"></path>
    </svg>
  );
};

USearchAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USearchAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USearchAlt;
