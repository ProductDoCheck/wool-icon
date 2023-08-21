import React from 'react';
import PropTypes from 'prop-types';

const USuitcaseAlt = props => {
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
      <path d="M19 6h-3V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v1H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3zm-9-1h4v1h-4V5zm10 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-5h4v1a1 1 0 102 0v-1h4v1a1 1 0 002 0v-1h4v5zm0-7H4V9a1 1 0 011-1h14a1 1 0 011 1v2z"></path>
    </svg>
  );
};

USuitcaseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USuitcaseAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USuitcaseAlt;