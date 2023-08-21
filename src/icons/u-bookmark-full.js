import React from 'react';
import PropTypes from 'prop-types';

const UBookmarkFull = props => {
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
      <path d="M18 2H6a1 1 0 00-1 1v18a1 1 0 001.65.76L12 17.27l5.29 4.44A1 1 0 0018 22a.84.84 0 00.38-.08A1 1 0 0019 21V3a1 1 0 00-1-1zm-1 16.86l-4.36-3.66a1 1 0 00-1.28 0L7 18.86V4h10v14.86z"></path>
    </svg>
  );
};

UBookmarkFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBookmarkFull.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBookmarkFull;
