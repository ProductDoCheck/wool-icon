import React from 'react';
import PropTypes from 'prop-types';

const UCornerUpLeftAlt = props => {
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
      <path d="M17 9.5H7.41l1.3-1.29a1.004 1.004 0 00-1.42-1.42l-3 3a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l3 3a.998.998 0 001.42 0 .999.999 0 000-1.42l-1.3-1.29H17a1 1 0 011 1v4a1 1 0 102 0v-4a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UCornerUpLeftAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCornerUpLeftAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCornerUpLeftAlt;
