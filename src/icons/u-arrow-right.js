import React from 'react';
import PropTypes from 'prop-types';

const UArrowRight = props => {
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
      <path d="M17.92 11.62a1.001 1.001 0 00-.21-.33l-5-5a1.003 1.003 0 10-1.42 1.42l3.3 3.29H7a1 1 0 000 2h7.59l-3.3 3.29a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l5-5a1 1 0 00.21-.33 1 1 0 000-.76z"></path>
    </svg>
  );
};

UArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowRight;
