import React from 'react';
import PropTypes from 'prop-types';

const UCornerDownRightAlt = props => {
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
      <path d="M20.92 12.62a1 1 0 00-.21-.33l-3-3a1.004 1.004 0 00-1.42 1.42l1.3 1.29H8a1 1 0 01-1-1V7a1 1 0 00-2 0v4a3 3 0 003 3h9.59l-1.3 1.29a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l3-3a1 1 0 00.21-.33 1 1 0 000-.76z"></path>
    </svg>
  );
};

UCornerDownRightAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCornerDownRightAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCornerDownRightAlt;
