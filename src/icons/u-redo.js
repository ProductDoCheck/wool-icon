import React from 'react';
import PropTypes from 'prop-types';

const URedo = props => {
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
      <path d="M21 11a1 1 0 00-1 1 8.05 8.05 0 11-2.22-5.5h-2.4a1 1 0 100 2h4.53a1 1 0 001-1V3a1 1 0 00-2 0v1.77A10 10 0 1022 12a1 1 0 00-1-1z"></path>
    </svg>
  );
};

URedo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URedo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URedo;
