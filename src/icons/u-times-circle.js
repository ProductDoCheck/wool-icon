import React from 'react';
import PropTypes from 'prop-types';

const UTimesCircle = props => {
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
      <path d="M15.71 8.29a.999.999 0 00-1.42 0L12 10.59l-2.29-2.3a1.004 1.004 0 10-1.42 1.42l2.3 2.29-2.3 2.29a.999.999 0 000 1.42 1 1 0 001.42 0l2.29-2.3 2.29 2.3a1 1 0 001.42 0 1.001 1.001 0 000-1.42L13.41 12l2.3-2.29a1.001 1.001 0 000-1.42zm3.36-3.36A10 10 0 104.93 19.07 10 10 0 1019.07 4.93zm-1.41 12.73A8 8 0 1120 12a7.948 7.948 0 01-2.34 5.66z"></path>
    </svg>
  );
};

UTimesCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTimesCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTimesCircle;
