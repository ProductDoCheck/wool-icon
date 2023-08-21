import React from 'react';
import PropTypes from 'prop-types';

const UArrowToRight = props => {
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
      <path d="M17.71 11.29l-4-4a1.003 1.003 0 10-1.42 1.42l2.3 2.29H3a1 1 0 000 2h11.59l-2.3 2.29a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l4-4a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33zM21 4a1 1 0 00-1 1v14a1 1 0 002 0V5a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UArrowToRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowToRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowToRight;
