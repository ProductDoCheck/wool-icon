import React from 'react';
import PropTypes from 'prop-types';

const UAdjustHalf = props => {
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
      <path d="M20.83 7.32a10.11 10.11 0 00-3.44-3.73A10 10 0 1012 22h.29a10.001 10.001 0 008.54-14.68zM11 19.93a8 8 0 010-15.86v15.86zm2-15.86a8.07 8.07 0 012.49.74L13 9.12V4.07zm0 9l4.17-7.17a8.142 8.142 0 011.58 1.83L13 17.69v-4.62zm1.15 6.58L19.74 10c.17.653.256 1.325.26 2a8 8 0 01-5.85 7.7v-.05z"></path>
    </svg>
  );
};

UAdjustHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAdjustHalf.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAdjustHalf;
