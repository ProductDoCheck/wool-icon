import React from 'react';
import PropTypes from 'prop-types';

const FiTarget = props => {
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
      <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
      <path d="M12 14a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

FiTarget.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiTarget.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiTarget;
