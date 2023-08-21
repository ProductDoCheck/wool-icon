import React from 'react';
import PropTypes from 'prop-types';

const UCloudCheck = props => {
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
      <path d="M14.29 14.19L11 17.48l-1.29-1.29a1 1 0 10-1.42 1.41l2 2a1.001 1.001 0 001.42 0l4-4a1 1 0 10-1.42-1.41zm4.13-5.87a7 7 0 00-13.36 1.9 4 4 0 00-.38 7.65 1.002 1.002 0 001.46-.987A1 1 0 005.32 16 2 2 0 014 14.1a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.6 1 1 0 00.78.66 3 3 0 01.24 5.84 1.008 1.008 0 00.25 2h.25a5 5 0 00.17-9.62v-.06z"></path>
    </svg>
  );
};

UCloudCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudCheck;
