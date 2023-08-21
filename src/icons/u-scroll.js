import React from 'react';
import PropTypes from 'prop-types';

const UScroll = props => {
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
      <path d="M11.29 9.71a1 1 0 001.42 0l5-5a1.004 1.004 0 10-1.42-1.42L12 7.59l-4.29-4.3a1.004 1.004 0 00-1.42 1.42l5 5zm1.42 4.58a1.002 1.002 0 00-1.42 0l-5 5a1.004 1.004 0 001.42 1.42l4.29-4.3 4.29 4.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-5-5z"></path>
    </svg>
  );
};

UScroll.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UScroll.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UScroll;
