import React from 'react';
import PropTypes from 'prop-types';

const UAnalytics = props => {
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
      <path d="M5 12a1 1 0 00-1 1v8a1 1 0 102 0v-8a1 1 0 00-1-1zm5-10a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1zm10 14a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm-5-8a1 1 0 00-1 1v12a1 1 0 002 0V9a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UAnalytics.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAnalytics.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAnalytics;
