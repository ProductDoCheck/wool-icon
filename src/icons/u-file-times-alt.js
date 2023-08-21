import React from 'react';
import PropTypes from 'prop-types';

const UFileTimesAlt = props => {
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
      <path d="M14 12H8a1 1 0 000 2h6a1 1 0 000-2zm5.41 7l1.3-1.29a1.004 1.004 0 10-1.42-1.42L18 17.59l-1.29-1.3a1.004 1.004 0 10-1.42 1.42l1.3 1.29-1.3 1.29a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l1.29-1.3 1.29 1.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L19.41 19zM12 20H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v3a1 1 0 002 0V9v-.06a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19.29.29 0 00-.1 0 1.099 1.099 0 00-.31-.11H6a3 3 0 00-3 3v14a3 3 0 003 3h6a1 1 0 000-2zm1-14.59L15.59 8H14a1 1 0 01-1-1V5.41zM8 8a1 1 0 000 2h1a1 1 0 000-2H8zm4 8H8a1 1 0 000 2h4a1 1 0 000-2z"></path>
    </svg>
  );
};

UFileTimesAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileTimesAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileTimesAlt;
