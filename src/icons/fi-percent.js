import React from 'react';
import PropTypes from 'prop-types';

const FiPercent = props => {
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
      <path d="M19 5L5 19"></path>
      <path d="M17.5 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
      <path d="M6.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
    </svg>
  );
};

FiPercent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiPercent.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiPercent;
