import React from 'react';
import PropTypes from 'prop-types';

const UCarSideview = props => {
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
      <path d="M19 9.5h-.32l-1.25-3.12a3 3 0 00-2.78-1.88h-6A3 3 0 005.7 6.91L5.18 9.5H5a3 3 0 00-3 3v3a1 1 0 001 1h1a3 3 0 106 0h4a3 3 0 006 0h1a1 1 0 001-1v-3a3 3 0 00-3-3zm-6-3h1.65a1 1 0 01.92.63l.95 2.37H13v-3zm-5.34.8a1 1 0 011-.8H11v3H7.22l.44-2.2zM7 17.5a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2zm3-3h-.78a3.002 3.002 0 00-4.44 0H9.22a3.002 3.002 0 00-4.44 0H4v-2a1 1 0 011-1h14a1 1 0 011 1v2z"></path>
    </svg>
  );
};

UCarSideview.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCarSideview.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCarSideview;