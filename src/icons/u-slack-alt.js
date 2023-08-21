import React from 'react';
import PropTypes from 'prop-types';

const USlackAlt = props => {
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
      <path d="M23 9.5A3.504 3.504 0 0019.5 6a3.46 3.46 0 00-1.5.351V4.5a3.494 3.494 0 00-6-2.442A3.487 3.487 0 006.351 6H4.5a3.495 3.495 0 00-2.442 6A3.487 3.487 0 006 17.649V19.5a3.495 3.495 0 006 2.442A3.486 3.486 0 0017.649 18H19.5a3.495 3.495 0 002.442-6A3.483 3.483 0 0023 9.5zm-10-5a1.5 1.5 0 113 0v5a1.5 1.5 0 11-3 0v-5zm-7 10A1.5 1.5 0 114.5 13H6v1.5zm5 5a1.5 1.5 0 11-3 0v-5a1.5 1.5 0 013 0v5zM9.5 11h-5a1.5 1.5 0 110-3h5a1.5 1.5 0 010 3zM11 6H9.5A1.5 1.5 0 1111 4.5V6zm1 6.058a4.006 4.006 0 00-.058-.058l.058-.058.058.058a3.56 3.56 0 00-.058.058zM14.5 21a1.502 1.502 0 01-1.5-1.5V18h1.5a1.5 1.5 0 110 3zm5-5h-5a1.5 1.5 0 110-3h5a1.5 1.5 0 110 3zm0-5H18V9.5a1.5 1.5 0 111.5 1.5z"></path>
    </svg>
  );
};

USlackAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USlackAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USlackAlt;
