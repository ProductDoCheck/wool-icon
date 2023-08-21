import React from 'react';
import PropTypes from 'prop-types';

const UCornerUpLeft = props => {
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
      <path d="M14.69 6.63h-7l2.92-2.92A1 1 0 009.905 2a1 1 0 00-.705.29L4.61 6.92a1 1 0 000 1.42L9.24 13a1 1 0 00.7.3 1 1 0 00.71-1.71L7.73 8.63h7a3 3 0 013 3V21a1 1 0 102 0v-9.37a5.002 5.002 0 00-5.04-5z"></path>
    </svg>
  );
};

UCornerUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCornerUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCornerUpLeft;
