import React from 'react';
import PropTypes from 'prop-types';

const UBringBottom = props => {
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
      <path d="M21 14h-2a1 1 0 000 2h1v4H4v-4h7a1 1 0 000-2h-1V9a1 1 0 00-1-1H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1v-6a1 1 0 00-1-1zM4 10h4v4H4v-4zm8.71-3.3L14 5.41V17a1 1 0 002 0V5.41l1.29 1.29a1 1 0 001.42.01 1 1 0 000-1.41l-3-3a1.001 1.001 0 00-1.42 0l-3 3a1 1 0 00.327 1.627A1 1 0 0012.71 6.7z"></path>
    </svg>
  );
};

UBringBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBringBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBringBottom;
