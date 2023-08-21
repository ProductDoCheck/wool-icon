import React from 'react';
import PropTypes from 'prop-types';

const UUploadAlt = props => {
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
      <path d="M9.71 6.71L11 5.41V17a1 1 0 102 0V5.41l1.29 1.3a1 1 0 001.639-.325 1 1 0 00-.219-1.095l-3-3a1 1 0 00-1.42 0l-3 3a1.004 1.004 0 001.42 1.42zM18 9h-2a1 1 0 100 2h2a1 1 0 011 1v7a1 1 0 01-1 1H6a1 1 0 01-1-1v-7a1 1 0 011-1h2a1 1 0 100-2H6a3 3 0 00-3 3v7a3 3 0 003 3h12a3 3 0 003-3v-7a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UUploadAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUploadAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUploadAlt;
