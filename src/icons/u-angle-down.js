import React from 'react';
import PropTypes from 'prop-types';

const UAngleDown = props => {
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
      <path d="M17 9.17a1 1 0 00-1.41 0L12 12.71 8.46 9.17a1 1 0 10-1.41 1.42l4.24 4.24a1.002 1.002 0 001.42 0L17 10.59a1.002 1.002 0 000-1.42z"></path>
    </svg>
  );
};

UAngleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAngleDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAngleDown;
