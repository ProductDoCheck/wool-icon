import React from 'react';
import PropTypes from 'prop-types';

const FiSkipBack = props => {
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
      <path d="M5 19V5"></path>
      <path d="M19 20L9 12l10-8v16z"></path>
    </svg>
  );
};

FiSkipBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiSkipBack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiSkipBack;
