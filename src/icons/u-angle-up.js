import React from 'react';
import PropTypes from 'prop-types';

const UAngleUp = props => {
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
      <path d="M17 13.41l-4.29-4.24a.999.999 0 00-1.42 0l-4.24 4.24a1 1 0 101.41 1.42L12 11.29l3.54 3.54a1 1 0 001.41 0 1 1 0 00.05-1.42z"></path>
    </svg>
  );
};

UAngleUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAngleUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAngleUp;
