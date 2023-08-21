import React from 'react';
import PropTypes from 'prop-types';

const FiMonitor = props => {
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
      <path d="M8 21h8"></path>
      <path d="M12 17v4"></path>
      <path d="M20 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
    </svg>
  );
};

FiMonitor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMonitor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMonitor;
