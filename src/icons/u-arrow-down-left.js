import React from 'react';
import PropTypes from 'prop-types';

const UArrowDownLeft = props => {
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
      <path d="M17 16H9.41l8.3-8.29a1.004 1.004 0 10-1.42-1.42L8 14.59V7a1 1 0 00-2 0v10a1 1 0 00.08.38 1 1 0 00.54.54c.12.051.25.078.38.08h10a1 1 0 000-2z"></path>
    </svg>
  );
};

UArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowDownLeft;
