import React from 'react';
import PropTypes from 'prop-types';

const UArrowCircleRight = props => {
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
      <path d="M15.71 12.71a1 1 0 00.21-.33 1 1 0 000-.76 1.001 1.001 0 00-.21-.33l-3-3a1.004 1.004 0 00-1.42 1.42l1.3 1.29H9a1 1 0 000 2h3.59l-1.3 1.29a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l3-3zM22 12a10 10 0 10-20 0 10 10 0 0020 0zM4 12a8 8 0 1116 0 8 8 0 01-16 0z"></path>
    </svg>
  );
};

UArrowCircleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowCircleRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowCircleRight;
