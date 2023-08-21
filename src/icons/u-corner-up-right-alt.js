import React from 'react';
import PropTypes from 'prop-types';

const UCornerUpRightAlt = props => {
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
      <path d="M19.92 10.12a1.001 1.001 0 00-.21-.33l-3-3a1.003 1.003 0 10-1.42 1.42l1.3 1.29H7a3 3 0 00-3 3v4a1 1 0 102 0v-4a1 1 0 011-1h9.59l-1.3 1.29a1.001 1.001 0 00.325 1.639 1 1 0 001.095-.22l3-3a1 1 0 00.21-.33 1 1 0 000-.76z"></path>
    </svg>
  );
};

UCornerUpRightAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCornerUpRightAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCornerUpRightAlt;
