import React from 'react';
import PropTypes from 'prop-types';

const UFileCheckAlt = props => {
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
      <path d="M11.5 20h-6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v5a1 1 0 002 0V9v-.06a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19.29.29 0 00-.1 0 1.099 1.099 0 00-.31-.11H5.5a3 3 0 00-3 3v14a3 3 0 003 3h6a1 1 0 000-2zm1-14.59L15.09 8H13.5a1 1 0 01-1-1V5.41zM7.5 14h6a1 1 0 000-2h-6a1 1 0 000 2zm4 2h-4a1 1 0 000 2h4a1 1 0 000-2zm-4-6h1a1 1 0 000-2h-1a1 1 0 000 2zm13.71 6.29a1.002 1.002 0 00-1.42 0l-3.29 3.3-1.29-1.3a1.004 1.004 0 00-1.42 1.42l2 2a1.002 1.002 0 001.42 0l4-4a1.002 1.002 0 000-1.42z"></path>
    </svg>
  );
};

UFileCheckAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileCheckAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileCheckAlt;
