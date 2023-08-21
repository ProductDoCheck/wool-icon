import React from 'react';
import PropTypes from 'prop-types';

const FiShare = props => {
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
      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path>
      <path d="M16 6l-4-4-4 4"></path>
      <path d="M12 2v13"></path>
    </svg>
  );
};

FiShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiShare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiShare;
