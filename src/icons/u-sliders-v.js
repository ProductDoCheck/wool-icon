import React from 'react';
import PropTypes from 'prop-types';

const USlidersV = props => {
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
      <path d="M7 6H6V3a1 1 0 00-2 0v3H3a1 1 0 000 2h4a1 1 0 000-2zm-2 4a1 1 0 00-1 1v10a1 1 0 102 0V11a1 1 0 00-1-1zm7 8a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm9-8h-1V3a1 1 0 00-2 0v7h-1a1 1 0 000 2h4a1 1 0 000-2zm-2 4a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm-5 0h-1V3a1 1 0 00-2 0v11h-1a1 1 0 000 2h4a1 1 0 000-2z"></path>
    </svg>
  );
};

USlidersV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USlidersV.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USlidersV;
