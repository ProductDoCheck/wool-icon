import React from 'react';
import PropTypes from 'prop-types';

const FiNavigation = props => {
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
      <path d="M3 11l19-9-9 19-2-8-8-2z"></path>
    </svg>
  );
};

FiNavigation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiNavigation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiNavigation;
