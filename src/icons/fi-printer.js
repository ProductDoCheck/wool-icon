import React from 'react';
import PropTypes from 'prop-types';

const FiPrinter = props => {
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
      <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path>
      <path d="M18 14H6v8h12v-8z"></path>
      <path d="M6 9V2h12v7"></path>
    </svg>
  );
};

FiPrinter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiPrinter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiPrinter;
