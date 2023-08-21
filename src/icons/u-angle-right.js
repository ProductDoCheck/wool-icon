import React from 'react';
import PropTypes from 'prop-types';

const UAngleRight = props => {
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
      <path d="M14.83 11.29l-4.24-4.24a1 1 0 10-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 000 1.41 1 1 0 00.71.29 1 1 0 00.71-.29l4.24-4.24a1.002 1.002 0 000-1.42z"></path>
    </svg>
  );
};

UAngleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAngleRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAngleRight;
