import React from 'react';
import PropTypes from 'prop-types';

const UComparison = props => {
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
      <path d="M21 20H4v-.54l5-5 3.8 3.8a1 1 0 001.41 0l7.5-7.5a1.002 1.002 0 00-.705-1.71 1 1 0 00-.705.29l-6.8 6.8-3.79-3.8a1 1 0 00-1.41 0L4 16.63v-5.17l5-5 2.8 2.8a1 1 0 001.41 0L18 4.47l2.19 2.19a1 1 0 001.41-1.42l-2.91-2.89a1 1 0 00-1.41 0l-4.8 4.8-2.79-2.8a1 1 0 00-1.41 0L4 8.63V3a1 1 0 00-2 0v18a1 1 0 001 1h18a1 1 0 000-2z"></path>
    </svg>
  );
};

UComparison.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UComparison.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UComparison;