import React from 'react';
import PropTypes from 'prop-types';

const FiFrown = props => {
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
      <path d="M15 9h.01"></path>
      <path d="M9 9h.01"></path>
    </svg>
  );
};

FiFrown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiFrown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiFrown;
