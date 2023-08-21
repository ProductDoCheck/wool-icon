import React from 'react';
import PropTypes from 'prop-types';

const USearchPlus = props => {
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
      <path d="M15 10h-3V7a1 1 0 10-2 0v3H7a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 100-2zm6.71 10.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a.999.999 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 110-14 7 7 0 010 14z"></path>
    </svg>
  );
};

USearchPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USearchPlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USearchPlus;
