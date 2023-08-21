import React from 'react';
import PropTypes from 'prop-types';

const UChartDown = props => {
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
      <path d="M21 11a1 1 0 00-1 1v2.59l-6.29-6.3a1 1 0 00-1.42 0L9 11.59l-5.29-5.3a1.004 1.004 0 00-1.42 1.42l6 6a1.001 1.001 0 001.42 0l3.29-3.3L18.59 16H16a1 1 0 000 2h5c.13-.002.26-.029.38-.08a1 1 0 00.54-.54c.051-.12.078-.25.08-.38v-5a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UChartDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UChartDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UChartDown;
