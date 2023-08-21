import React from 'react';
import PropTypes from 'prop-types';

const UUsdCircle = props => {
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
      <path d="M11 9h4a1 1 0 100-2h-2V6a1 1 0 00-2 0v1a3 3 0 000 6h2a1 1 0 010 2H9a1 1 0 000 2h2v1a1 1 0 002 0v-1a3 3 0 000-6h-2a1 1 0 010-2zm1-8a11 11 0 100 22 11 11 0 000-22zm0 20a9 9 0 110-18 9 9 0 010 18z"></path>
    </svg>
  );
};

UUsdCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUsdCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUsdCircle;
