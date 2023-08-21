import React from 'react';
import PropTypes from 'prop-types';

const UPaintTool = props => {
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
      <path d="M18 1h-8a3 3 0 00-3 3H6a3 3 0 00-3 3v3a3 3 0 003 3h6a1 1 0 011 1v1a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2v-1a3 3 0 00-3-3H6a1 1 0 01-1-1V7a1 1 0 011-1h1a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zm-3 16v4h-2v-4h2zm4-11a1 1 0 01-1 1h-8a1 1 0 01-1-1V4a1 1 0 011-1h8a1 1 0 011 1v2z"></path>
    </svg>
  );
};

UPaintTool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPaintTool.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPaintTool;