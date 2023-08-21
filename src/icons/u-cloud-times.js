import React from 'react';
import PropTypes from 'prop-types';

const UCloudTimes = props => {
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
      <path d="M18.42 8.22a7 7 0 00-13.36 1.89A4 4 0 006 18a1 1 0 100-2 2 2 0 110-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 01.24 5.84 1.002 1.002 0 00.5 1.94 5 5 0 00.17-9.62zm-3.71 6.07a1.002 1.002 0 00-1.42 0L12 15.59l-1.29-1.3a1.004 1.004 0 10-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l1.29-1.3 1.29 1.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L13.41 17l1.3-1.29a1 1 0 000-1.42z"></path>
    </svg>
  );
};

UCloudTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudTimes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudTimes;
