import React from 'react';
import PropTypes from 'prop-types';

const UDumbbell = props => {
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
      <path d="M17.48 6.55l-2.84-2.84a.999.999 0 00-1.42 0 1 1 0 000 1.41l2.12 2.12-8.1 8.1-2.12-2.12a1 1 0 10-1.41 1.42l2.81 2.81 2.81 2.81a1 1 0 101.42-1.41l-2.09-2.09 8.1-8.1 2.12 2.12a1.002 1.002 0 001.41-1.42l-2.81-2.81zM3.71 17.46a1.004 1.004 0 10-1.42 1.42l2.83 2.83a1 1 0 00.71.29.999.999 0 00.71-1.71l-2.83-2.83zm18-12.34l-2.83-2.83a1.004 1.004 0 10-1.42 1.42l2.83 2.83a1 1 0 001.42 0 .998.998 0 000-1.42z"></path>
    </svg>
  );
};

UDumbbell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDumbbell.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDumbbell;
