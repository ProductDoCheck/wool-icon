import React from 'react';
import PropTypes from 'prop-types';

const FiMaximize2 = props => {
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
      <path d="M9 21H3v-6"></path>
      <path d="M3 21l7-7"></path>
      <path d="M15 3h6v6"></path>
      <path d="M21 3l-7 7"></path>
    </svg>
  );
};

FiMaximize2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMaximize2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMaximize2;
