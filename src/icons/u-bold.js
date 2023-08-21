import React from 'react';
import PropTypes from 'prop-types';

const UBold = props => {
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
      <path d="M16.5 9.5A3.5 3.5 0 0013 6H8.5a1 1 0 00-1 1v10a1 1 0 001 1H13a3.49 3.49 0 002.44-6 3.5 3.5 0 001.06-2.5zM13 16H9.5v-3H13a1.5 1.5 0 110 3zm0-5H9.5V8H13a1.5 1.5 0 010 3z"></path>
    </svg>
  );
};

UBold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBold.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBold;
