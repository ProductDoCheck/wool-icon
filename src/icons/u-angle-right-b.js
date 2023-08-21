import React from 'react';
import PropTypes from 'prop-types';

const UAngleRightB = props => {
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
      <path d="M15.54 11.29L9.88 5.64a1 1 0 10-1.42 1.41l4.95 5L8.46 17a1 1 0 000 1.41 1 1 0 00.71.3.999.999 0 00.71-.3l5.66-5.65a1 1 0 000-1.47z"></path>
    </svg>
  );
};

UAngleRightB.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAngleRightB.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAngleRightB;
