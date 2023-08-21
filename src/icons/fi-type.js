import React from 'react';
import PropTypes from 'prop-types';

const FiType = props => {
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
      <path d="M9 20h6"></path>
      <path d="M4 7V4h16v3"></path>
      <path d="M12 4v16"></path>
    </svg>
  );
};

FiType.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiType.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiType;
