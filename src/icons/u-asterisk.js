import React from 'react';
import PropTypes from 'prop-types';

const UAsterisk = props => {
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
      <path d="M18.562 14.634L14 12l4.562-2.634a1 1 0 00-1-1.732L13 10.268V5a1 1 0 10-2 0v5.268L6.438 7.634a1 1 0 00-1 1.732L10 12l-4.562 2.634a1 1 0 001 1.732L11 13.732V19a1 1 0 002 0v-5.268l4.562 2.634a1 1 0 001-1.732z"></path>
    </svg>
  );
};

UAsterisk.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAsterisk.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAsterisk;